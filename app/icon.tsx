import { ImageResponse } from "next/og"
import { readFileSync } from "fs"
import { join } from "path"

// Route segment config
export const runtime = "nodejs"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  try {
    // Attempt to read the image from the public folder
    const imagePath = join(process.cwd(), "public", "inst.jpg")
    const fileData = readFileSync(imagePath)
    const base64Image = `data:image/jpeg;base64,${fileData.toString("base64")}`

    return new ImageResponse(
      (
        <div
          style={{
            background: "transparent",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%", // This CSS makes the generated image round
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={base64Image} 
            alt="Icon"
            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
          />
        </div>
      ),
      { ...size },
    )
  } catch (e) {
    // Fallback if image fails to load
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 18,
            background: "black",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            borderRadius: "50%",
            fontWeight: "bold",
          }}
        >
          BT
        </div>
      ),
      { ...size },
    )
  }
}