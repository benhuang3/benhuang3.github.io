---
title: "Hashrate Mining Optimizer"
image: "/assets/images/bitcoin.png"
technologies: ["Python", "Torch"]
link: https://github.com/haejinjo/mara-hackathon
repo: https://github.com/haejinjo/mara-hackathon
year: "TODO"
role: "TODO: your role"
summary: "A reinforcement learning system that predicts and allocates mining hashrate from operational data."
---

A reinforcement learning system that predicts and allocates mining hashrate from operational data.

Built in Python with PyTorch for the MARA hackathon, the project frames hashrate allocation as a sequential decision problem: an agent observes operating conditions and learns a policy for how much hashrate to commit, rather than reacting with fixed thresholds. Mining is a natural fit for RL because the trade-off between energy cost and yield shifts continuously, so a learned policy can adapt where static heuristics cannot.

TODO: describe the data the agent was trained on and the reward signal used, plus how the policy compared against a simple baseline.
