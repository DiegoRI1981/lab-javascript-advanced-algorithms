const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const Queue = new Queue();

const clearQueueInput = () => {
  // ... your code goes here

  queueInput.value = ''

};

const generateListQueue = () => {
  // ... your code goes here

  warningTopQueue.style.display = 'none';
  warningBottomQueue.style.display = 'none';
  queueList.innerHTML = '';
  let length = Queue.display().length;
  let size = Queue.MAX_SIZE - length;
  Queue.display().forEach(item => {
    let li = document.createElement('li');
    li.className = 'active';
    li.innerText = item;
    queueList.appendChild(li);
  });
  for (let i = 0; i < size; i++) {
    let li = document.createElement('li');
    li.className = 'inactive';
    li.innerHTML = '&nbsp;';
    queueList.appendChild(li);
  }

};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // ... your code goes here

    warningBottomQueue.style.display = 'block';
    warningBottomQueue.innerText = type;

  } else if (type === 'overflow') {
    // ... your code goes here

    warningTopQueue.style.display = 'block';
    warningTopQueue.innerText = type;

  }
};

const addToQueue = () => {
  try {
    // ... your code goes here

    generateWarningQueue('overflow');

  } catch (error) {
    // there was an overflow error, handle it

    clearQueueInput();
    renderListQueue();

  }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
  } catch (error) {
    // there was an underflow error, handle it
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);