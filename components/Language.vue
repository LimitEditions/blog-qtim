<template>
  <div>
    <div class="language-selector">
      <div class="flag-contur">
        <img
          :src="getFlagUrl(currentLanguage)"
          :alt="getLanguageName(currentLanguage)"
          class="flag-icon"
          @click="toggleLanguage"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import eng from "../assets/img/united kingdom.png";
import rus from "../assets/img/russian.jpg";

const languages = [
  { code: "en", name: "English" },
  { code: "ru", name: "Русский" },
];

const currentLanguage = ref("en");

const getFlagUrl = (code: string) => {
  switch (code) {
    case "en":
      return eng;
    case "ru":
      return rus;
    default:
      return eng;
  }
};

const getLanguageName = (code: string) => {
  const lang = languages.find(lang => lang.code === code);
  return lang ? lang.name : 'English';
};

const toggleLanguage = () => {
  const currentIndex = languages.findIndex(lang => lang.code === currentLanguage.value);
  const nextIndex = (currentIndex + 1) % languages.length;
  currentLanguage.value = languages[nextIndex].code;
};
</script>

<style lang="scss" scoped>
.flag-contur {
  width: 52px;
  height: 52px;
  border: 2px solid #0000001a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flag-icon {
  width: 24px;
  height: auto;
}
</style>
