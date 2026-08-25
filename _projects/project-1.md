---
title: "Worldcraft"
image: "/assets/images/worldcraft.jpg"
technologies: ["Python", "PyTorch", "NeRF", "FastAPI"]
link: https://worldcraft-org.github.io/worldcraft.github.io/
year: "TODO"
role: "TODO: your role"
summary: "Turns ordinary photographs into playable Minecraft worlds using computer vision and neural radiance fields."
---

Turns ordinary photographs into playable Minecraft worlds using computer vision and neural radiance fields.

Worldcraft runs a four-stage pipeline: semantic segmentation with Mask2Former labels the scene, Nerfstudio trains a NeRF to recover 3D structure, the resulting point cloud is voxelized, and each voxel is mapped to a Minecraft block. The interesting part is bridging continuous neural geometry with a hard voxel grid — segmentation labels carry through the reconstruction so the final world keeps materials that match the original scene.
