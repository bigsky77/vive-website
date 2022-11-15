---
title: The Zero-Knowledge Computer Stack  
date: 11-04-22
---

This is an outline of the computer stack used with zero-knowledge computing. Over the next decade, ZK systems will grow more and more prominient for scaling blockchain applications.  Becuase of the high-computational overhead for these systems, every level across the stack will need to be highly optimized.  In fact, much of the computing power that currently powers POW systems may soon transition to powering ZK proving systems.  

The stack broadly occurs across 3-different levels of computing.  

1. Applications
2. System 
3. Hardware

## Applications 

This is where people will directly interact with these systems.  

At the extreme front end, proof generation will occur in the actuall browser.  Games like (Zordle)[https://github.com/nalinbhardwaj/zordle] use WASM to run a Halo2 prover and verifier fully in the browser.  These systems are  a long-way from being fully optimized and proof generation remains extrmely slow.   
