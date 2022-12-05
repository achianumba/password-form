document.querySelector('.stay-signed-in').addEventListener('click', (e) => {
  e.stopPropagation();
  console.log(
    (e.currentTarget.children[0].checked = !e.currentTarget.children[0].checked)
  );
});

document
  .querySelector('.stay-signed-in__switch')
  .addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('toggle-switch');
  });

document
  .querySelector('.toggle-password-visibility')
  .addEventListener('click', (e) => {
    const passwordIsVisible = /hide/.test(e.target.src);

    const inputType = passwordIsVisible ? 'password' : 'text';
    document.querySelector('.password__input').setAttribute('type', inputType);

    e.target.src = passwordIsVisible
      ? 'images/icon-show-password.svg'
      : 'images/icon-hide-password.svg';
  });
