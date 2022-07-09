
const form = document.querySelector('.form')
import Notiflix from 'notiflix';



function createPromise(position, delay) {
  const firstDelay = form.querySelector('input[name="delay"]').value
  const stepDelay = form.querySelector('input[name="step"]').value
  const amount = form.querySelector('input[name="amount"]').value

  console.log(amount, firstDelay, stepDelay);
  const shouldResolve = Math.random() > 0.3;

  setTimeout(() => {
    return new Promise((resolve, reject) => {

      if (shouldResolve) {
        resolve({ position: 0, delay: firstDelay })
      } else {
        reject({ position: 0, delay: firstDelay });
      }
    }
    )
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
      })
      .finally(doNext);
  }, firstDelay)


  function doNext() {
    for (i = 1; i < amount; i++) {

      position = 1;


      setTimeout(() => {
        return new Promise((resolve, reject) => {
          const shouldResolve = Math.random() > 0.3;

          const first = parseInt(firstDelay)
          const secDelay = stepDelay * position;

          if (shouldResolve) {
            resolve({ position: position++, delay: first + secDelay })
          } else {
            reject({ position: position++, delay: first + secDelay });
          }
        }).then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
          .catch(({ position, delay }) => {
            Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
          });
      }, stepDelay * i)


    }
  }

};

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
})

form.addEventListener('submit', createPromise)
