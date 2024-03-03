let BlockData = {
  "program": [
    {
      title: 'Головний блок',
      image: 'program.png',
      text: 'Блок program - початок всіх програм. Комірка setup - виконується один раз, а loop - завжди',
      description: undefined,
      alert: [
        'Блок program може бути лише 1',
      ]
    },

    {
      title: 'Затримка',
      image: 'delaymillis.png',
      text: 'Блок для створення затримки, программа зупиняється на вказаний час',
      description: undefined,
      alert: [
        'Значення потрібно вказувати в мілісекундах. 1000 мілісекунд - 1 секунда.',
      ]
    },

    {
      title: 'Умова (мала)',
      image: 'ifmini.png',
      text: 'Виконує комірку then якщо умова в test вірна.',
      description: undefined,
      alert: [
        'Умова може приймати 2 стани правда(HIGH) або брехня(LOW)'
      ],
    },
  ],
  
  'pins':[
    {
      title: 'Управління цифровими пінами',
      image: 'setdigitaloutput.png',
      text: 'Блок для включення та виключення піна. Потрібно вказати пін, та його стан. HIGH - включено, LOW - виключено.',
      description: undefined,
      alert: undefined,
    }
  ],
}