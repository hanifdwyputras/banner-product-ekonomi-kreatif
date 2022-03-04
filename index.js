const { Canvas, resolveImage } = require('canvas-constructor/cairo');
const fs = require('fs');

async function generate() {
	// prepare
	const canvas = new Canvas(500, 500);
	const image = await resolveImage('./pexels.jpg');
	const kelapa = await resolveImage('./kelapa.jpeg');

	/** Set background */
	canvas.printImage(image, 0, 0, 500, 500);

	/** Print circle (sebagai fondasi) */
	canvas.setColor('#FF6D36')
	.printCircle(500/2, 500/2, 210);

	/** Print sub-circle */
	canvas.setColor('#FFFFFF')
	.printCircle(500/2, 500/2, 206);

	/** Print lesson name */
	canvas.setColor('#000000')
	.setTextFont('bold 25px "Poppins Regular"')
	.setTextAlign('center')
	.printText('IPS - Ekonomi Kreatif', 500/2, (500/2)-120);

	/** Print title */
	canvas.setColor('#000000')
	.setTextFont('22px "Poppins Regular"')
	.setTextAlign('center')
	.printText('Membuat Produk Kreatif', 500/2, (500/2)-90);

	/** Print description */
	canvas.setColor('#30B0FF')
	.setTextFont('italic 18px Poppins')
	.setTextAlign('center')
	.printWrappedText('Menyegarkan, melegakan, dan\nmengenyangkan!', 500/2, (500/2)+10);

	/** Print author */
	canvas.setColor('#000000')
	.setTextFont('12px Impact')
	.setTextAlign('left')
	.printText('Hanif Dwy Putra S', (500/2)-240, (500/2)+235);

	/** Print product name */
	canvas.setColor('#0023FF')
	.setTextFont('bold 40px Poppins')
	.setTextAlign('center')
	.printText('Coconut Ice cream', 500/2, (500/2)-20);

	/** Print coconut image */
	canvas.printCircularImage(kelapa, 500/2, (500/2)+120, 80);

	/** Write file */
	fs.writeFileSync('./result.png', await canvas.toBufferAsync('image/png'));
}

generate();
