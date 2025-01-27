const { Canvas } = require('canvas-constructor')
const canvas = require('canvas')
module.exports = {
  route: "/twitter",
  run: async (req, res) => {
    const img = await canvas.loadImage('https://teckspace.files.wordpress.com/2011/08/twitter1.jpg')

    let image = new Canvas(550, 267)
    .printImage(img, 0, 0, 550, 267)
    .setTextFont('28px Impact')
    .printText(req.params.feed, 40, 150)
    .toBuffer();

    res.set({'Content-Type': 'image/png'})//setting content type as png image!
    res.send(image)//sending the image!
  },
};

