const imagekit = require("../lib/imageKit");

const uploadImage = async (req, res) => {
  // untuk dapat extension file nya
  const image = req.file.originalname.split(".");
  const ext = image[image.length - 1];

  // upload file dari imagekit dokumentasi
  imagekit.upload(
    {
      file: req.file.buffer, //required
      fileName: `${req.file.originalname}.${ext}`, //required
    },
    function (error, result) {
      if (error) console.log(error);
      else console.log(result);
    }
  );

  res.end();
};

module.exports = {
  uploadImage,
};