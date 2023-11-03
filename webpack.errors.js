const webpack = require('webpack');
const config = require('./webpack.config.js');

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    // Derleme hatası oluştuğunda veya hatalar varsa
    const jsonStats = stats.toJson();
    const errorDetails = jsonStats.errors.map((error) => error.message);
    const errorJSON = JSON.stringify(errorDetails, null, 2);

    const fs = require('fs');
    fs.writeFileSync('build-errors.json', errorJSON, 'utf8');

    if (err) {
      console.error(err);
    }
  } else {
    console.log('Üretim derleme başarıyla tamamlandı.');
  }
});
