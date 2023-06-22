//Задача № 1

function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash);
    if(objectInCache){
      console.log("Из кеша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }
    
    let result = func(...args);
    cache.push({ hash: hash, value: result });

    if (cache.length > 5) { 
      cache.shift(); 
    }
    console.log("Вычисляем: " + result);
    cache[hash] = result;
    return "Вычисляем: " + result;  
    };
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId;
  let count = 0;
  let allCount = 0;

  if (!wrapper.count) {
    wrapper.count = 0;
  }

  if (!wrapper.allCount) {
    wrapper.allCount = 0;
  }

  function wrapper(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
      allCount++;
    }

    if (!timeoutId) {
      func.apply(this, args);
      count++;
    }

    timeoutId = setTimeout(() => {
      count++;
      func.apply(this, args);
    }, delay);

    wrapper.count = count;
    wrapper.allCount = allCount + 1;
  }

  return wrapper;
}