import shutil
import os

source_images = [
    (r"C:/Users/KANNAN/.gemini/antigravity/brain/8de5b675-2be1-4ada-a4e3-cf5bb1be6fad/.user_uploaded/media_1793941220945_25c38ffd.jpg", "avatar-1.jpg"),
    (r"C:/Users/KANNAN/.gemini/antigravity/brain/8de5b675-2be1-4ada-a4e3-cf5bb1be6fad/.user_uploaded/media_1793941220956_563d15e9.jpg", "avatar-2.jpg"),
    (r"C:/Users/KANNAN/.gemini/antigravity/brain/8de5b675-2be1-4ada-a4e3-cf5bb1be6fad/.user_uploaded/media_1793941220982_b9d1600a.jpg", "avatar-3.jpg"),
    (r"C:/Users/KANNAN/.gemini/antigravity/brain/8de5b675-2be1-4ada-a4e3-cf5bb1be6fad/.user_uploaded/media_1793941220994_d3d73267.jpg", "avatar-4.jpg"),
    (r"C:/Users/KANNAN/.gemini/antigravity/brain/8de5b675-2be1-4ada-a4e3-cf5bb1be6fad/.user_uploaded/media_1793941221015_a02e4ebf.jpg", "avatar-5.jpg"),
]

dest_dir = r"c:\Users\KANNAN\Desktop\AquaPure\assets\images"
for src, name in source_images:
    dest = os.path.join(dest_dir, name)
    shutil.copy2(src, dest)
    print(f"Copied {name} ({os.path.getsize(dest)} bytes)")
