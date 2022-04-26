export const InitialImage = (size, name, color) => {
    if(name == null) return;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = canvas.height = size;

    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, size, size);

    context.fillStyle=`${color}50`;
    context.fillRect(0, 0, size, size);

    context.fillStyle = color;
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.font = `${size/2}px Roboto`;
    context.fillText(name,(size/2), (size/2));

    return canvas.toDataURL();
};