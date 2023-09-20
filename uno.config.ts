import {
  defineConfig,
  presetIcons,
  presetUno,
  presetTypography,
  transformerDirectives,
} from 'unocss';

export default defineConfig({
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    presetUno({
      dark: 'class'
    }),
    presetIcons({
      collections: {
        logos: () =>
          import('@iconify-json/logos/icons.json').then((i) => i.default),
        uil: () =>
          import('@iconify-json/uil/icons.json').then((l) => l.default),
      },
    }),
    presetTypography(),
  ],
});
