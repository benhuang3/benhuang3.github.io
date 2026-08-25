---
title: "GPGraph: GPU Graph Processing"
image: "/assets/images/graph.png"
technologies: ["Cuda", "C", "C++"]
link: https://github.com/benhuang3/gpgraph
repo: https://github.com/benhuang3/gpgraph
year: "TODO"
role: "TODO: your role"
summary: "A CUDA library that moves classic graph algorithms onto the GPU for high-throughput processing."
---

A CUDA library that moves classic graph algorithms onto the GPU for high-throughput processing.

GPGraph is written in CUDA C/C++ and implements graph traversal and analysis routines as data-parallel kernels rather than pointer-chasing CPU loops. Work on this kind of library lives and dies on memory behaviour — coalesced access over the adjacency structure, keeping thread divergence low on irregular neighbour lists, and balancing work across warps when vertex degrees are skewed.

TODO: name the specific algorithms implemented (e.g. BFS, PageRank, connected components) and any measured speedup over a CPU baseline.
