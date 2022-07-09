
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

      setTimeout(() => {
        new Promise((resolve, reject) => {

          if (shouldResolve) {
            resolve({ position: i * 1, delay: stepDelay })
          } else {
            reject({ position: i * 1, delay: stepDelay });
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

}

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
})

form.addEventListener('submit', createPromise)
