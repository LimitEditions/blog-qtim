<template>
  <footer class="container footer">
    <div class="second-container">
      <h3>Is there a project?</h3>
      <div class="footer__contacts">
        <div>
          <h1 class="footer-start">Let’s work together</h1>
        </div>
        <div class="footer__contacts_details">
          <div>
            <p class="footer__contacts_title">For all questions</p>
            <p>+7 (920) 278—00—68</p>
            <p class="footer__contacts_mail">qtim@agency.com</p>
          </div>
          <div>
            <p class="footer__contacts_title">Office in Russia</p>
            <p>139 Ruben Station Lake Drew, NM 52678</p>
            <button class="footer__btn">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 10.5L10.5 1.5L1.5 4.5L5.25 6.75L7.5 10.5Z"
                  stroke="#E2BEFF"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div>
            <p class="footer__contacts_title">Office in Dubai</p>
            <p>139 Ruben Station Lake Drew, NM 52678</p>
            <button class="footer__btn">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 10.5L10.5 1.5L1.5 4.5L5.25 6.75L7.5 10.5Z"
                  stroke="#E2BEFF"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="footer__link">
        <div class="footer__link_site">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Telegram</a>
        </div>
        <button class="footer__link_go">Go</button>
        <div class="footer__link_site">
          <a href="#">Behance</a>
          <a href="#">Linkedn</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 140px;
  background-color: $secondary-color;

  &__contacts {
    display: flex;
    gap: 368px;
    margin-top: 56px;

    &_details {
      width: 168px;
      line-height: 19.2px;
      display: flex;
      flex-direction: column;
      gap: 36px;
    }

    &_title {
      margin-bottom: 12px;
    }

    &_mail {
      margin-top: 4px;
    }
  }

  &__btn {
    margin-top: 8px;
    width: 32px;
    height: 32px;
    background-color: $primary-color;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border: none;
    cursor: pointer;
  }

  &__link {
    margin-top: 143px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    cursor: pointer;

    &_site {
      display: flex;
      gap: 32px;
      line-height: 19.2px;
      letter-spacing: 0.01em;
      text-decoration: 0.4px underline $primary-color;
      text-underline-offset: 6px;
      padding-bottom: 20px;
    }

    &_go {
      width: 358px;
      height: 149px;
      border: none;
      border-radius: 50% 50% 0 0 / 100% 100% 0 0; /* угол состоит из половины ширины (50% от 10em = 10em : 2 = 5em) и всей высоты (100% от 5em = 5em) */
      background: $primary-color;
      color: #f3f3f3;
      font-size: 32px;
      font-weight: 400;
      line-height: 32px;
      text-align: left;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding-bottom: 25px;
    }
  }
}

.footer h3 {
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  letter-spacing: 0.01em;
}

.footer-start {
  font-size: 103px;
  font-weight: 400;
  line-height: 112px;
  width: 464px;
  text-decoration: 1px underline $primary-color;
  text-underline-offset: 16px;
}
</style>
