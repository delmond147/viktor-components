from PIL import Image

def remove_white_bg(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Calculate how close the pixel is to white
        # If it's pure white (255, 255, 255), alpha becomes 0
        # If it's a shadow (grey), we convert it to black with partial transparency
        r, g, b, a = item
        # Calculate grayscale value (lightness)
        lightness = (r + g + b) / 3.0
        
        if r > 240 and g > 240 and b > 240:
            newData.append((255, 255, 255, 0))
        elif r > 200 and g > 200 and b > 200 and abs(r-g) < 10 and abs(g-b) < 10:
            # It's a light shadow/halo
            alpha = int(255 - lightness)
            newData.append((r, g, b, alpha))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")

remove_white_bg("public/3d-x-icon.png", "public/3d-x-icon-transparent.png")
