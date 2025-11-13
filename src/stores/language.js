import { writable } from 'svelte/store';

export const currentLang = writable('ko');
export const config = writable(null);

// Load configuration from JSON
export async function loadConfig() {
  try {
    const response = await fetch('/config/settings.json');
    const data = await response.json();
    config.set(data);
    return data;
  } catch (error) {
    console.error('Failed to load configuration:', error);
    return null;
  }
}

// Get translation for current language
export function getTranslation(key) {
  let configData;
  let lang;

  config.subscribe(value => configData = value)();
  currentLang.subscribe(value => lang = value)();

  if (!configData || !configData.translations || !configData.translations[lang]) {
    return key;
  }

  return configData.translations[lang][key] || key;
}
