
const form = document.querySelector('.form')

const values = {}

function createPromise(position, delay) {
  const firstDelay = form.querySelector('input[name="delay"]').value
  const stepDelay = form.querySelector('input[name="step"]').value
  const amount = form.querySelector('input[name="amount"]').value

  console.log(amount, firstDelay, stepDelay);
  const shouldResolve = Math.random() > 0.3;

  setTimeout(() => {
    const newProm = new Promise((resolve, reject) => {

      if (shouldResolve) {
        resolve({ position: 1, delay: firstDelay })
      } else {
        reject({ position: 1, delay: firstDelay });
      }
    }
    )
      .then(({ position, delay }) => {
        console.log
          (`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log
          (`❌ Rejected promise ${position} in ${delay}ms`);
      })
      .finally(doNext);
  }, firstDelay)

  function doNext() {
    for (let i = 1; i < amount; i++) {

      position = 2;
      delay = firstDelay + stepDelay * position

      setTimeout(() => {
        return new Promise((resolve, reject) => {
          const shouldResolve = Math.random() > 0.3;

          const first = parseInt(firstDelay)
          const secDelay = stepDelay * (position - 1);

          if (shouldResolve) {
            resolve({ position: position++, delay: first + secDelay })
          } else {
            reject({ position: position++, delay: first + secDelay });
          }
        }).then(({ position, delay }) => {
          console.log
            (`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
          .catch(({ position, delay }) => {
            console.log
              (`❌ Rejected promise ${position} in ${delay}ms`);
          });
      }, stepDelay * i)

    }
  }

  console.log

};

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
})

form.addEventListener('submit', createPromise)



