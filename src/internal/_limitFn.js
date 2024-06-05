import Queue from "./_queue";

// 限制异步请求函数并行执行次数
const _limitFn = (limit) => {
  if (typeof limit !== 'number' || limit < 1) {
    throw new Error('limit must be a positive integer');
  }
  const queue = new Queue();
  let activeCount = 0;

  const next = () => {
    activeCount--;
    if (queue.size > 0) {
      queue.dequeue()();
    }
  }

  const run = async (fn, resolve, ...args) => {
    activeCount++;

    const result = (async () => fn(...args))();
    resolve(result);
    try {
      await result;
    } catch {}

    next();
  }

  const enqueue = (fn, resolve, ...args) => {
    queue.enqueue(run.bind(null, fn, resolve, ...args));
    (async () => {
      // 等待下一个微任务，比较时获取最新的activeCount
      await Promise.resolve();

      if (activeCount < limit && queue.size > 0) {
        queue.dequeue()();
      }
    })();
  }

  const generator = (fn, ...args) => {
    return new Promise((resolve) => {
      queue.enqueue(fn, resolve, ...args);
    });
  }

  Object.defineProperty(generator, {
    activeCount: {
      get: () => activeCount
    },
    pendingCount: {
      get: () => queue.size
    },
    clearQueue: {
      value: () => {
        queue.clear();
      }
    }
  });

  return generator;
}

export default _limitFn;