const btnNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

btnNav.addEventListener('click', () => {
  header.classList.toggle('nav-open');
});

// Sticky navigation
const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);

obs.observe(sectionHeroEl);

const fullName = document.getElementById('full-name');
const email = document.getElementById('email-address');
const signUp = document.getElementById('btn-form');
const selectWhere = document.getElementById('select-where');
const fullNameMessage = document.getElementById('full-name-message');
const emailMessage = document.getElementById('email-message');
const selectMessage = document.getElementById('select-message');

const regName =
  /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;

const regEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const styleFieldError = (input) => {
  input.setAttribute('class', 'field-error');
};

const showError = (field, input, message) => {
  input.textContent = message;
  styleFieldError(field);
};

const showSuccess = (input) => {
  input.textContent = '';
};

const checkFullName = (input) => {
  if (!input.value) {
    showError(fullName, fullNameMessage, 'Field is required');
    return true;
  } else {
    if (!regName.test(input.value)) {
      showError(fullName, fullNameMessage, 'Value is invalid');
      return true;
    } else {
      showSuccess(fullNameMessage);
    }
  }
  return false;
};

const checkEmail = (input) => {
  if (!input.value) {
    showError(email, emailMessage, 'Field is required');
    return true;
  } else {
    if (!regEmail.test(input.value)) {
      showError(email, emailMessage, 'Value is invalid');
      return true;
    } else {
      showSuccess(emailMessage);
    }
  }
  return false;
};

const checkSelectWhere = (input) => {
  if (!input.value) {
    showError(selectWhere, selectMessage, 'Select an option');
    return true;
  } else {
    showSuccess(selectMessage);
  }
  return false;
};

const resetForm = ([...fields]) => {
  fullName.value = '';
  email.value = '';
  selectWhere.value = '';

  fields.forEach((field) => {
    field.removeAttribute('class');
  });
};

signUp.addEventListener('click', (e) => {
  e.preventDefault();

  checkFullName(fullName);
  checkEmail(email);
  checkSelectWhere(selectWhere);

  let isFullNameError = !checkFullName(fullName);
  let isEmailError = !checkEmail(email);
  let isSelectError = !checkSelectWhere(selectWhere);

  if (isFullNameError && isEmailError && isSelectError) {
    alert('Success');
    resetForm([fullName, email, selectWhere]);
  }
});
