---
title: "SABER: Symbolic Regression-based Angle of Arrival and Beam Pattern Estimator"
collection: publications
category: manuscripts
excerpt: ''
permalink: /publication/Journal-paper-33
date: 2026-04-30
venue: 'IEEE Transactions on Instrumentation and Measurement'
paperurl: 'https://doi.org/10.1109/TIM.2026.3687328'
---

Accurate Angle-of-arrival (AoA) estimation is essential for next-generation wireless communication systems to enable reliable beamforming, high-precision localization, and integrated sensing. Unfortunately, classical high-resolution techniques require multi-element arrays and extensive snapshot collection, while generic Machine Learning (ML) approaches often yield black-box models that lack physical interpretability. To address these limitations, we propose a Symbolic Regression (SR)-based ML framework. Namely, Symbolic Regression-based Angle of Arrival and Beam Pattern Estimator (SABER), a constrained symbolic-regression framework that automatically discovers closed-form beam pattern and AoA models from path loss measurements with interpretability. SABER achieves high accuracy while bridging the gap between opaque ML methods and interpretable physics-driven estimators. First, we validate our approach in a controlled free-space anechoic chamber, showing that both direct inversion of the known cosn beam and a low-order polynomial surrogate achieve sub-0.5 degree Mean Absolute Error (MAE). A purely unconstrained SR method can further reduce the error of the predicted angles, but produces complex formulas that lack physical insight. Then, we implement the same SR-learned inversions in a real-world, Reconfigurable Intelligent Surface (RIS)-aided indoor testbed. SABER and unconstrained SR models accurately recover the true AoA with near-zero error. Finally, we benchmark SABER against the Cram´er-Rao Lower Bounds (CRLBs). Our results demonstrate that SABER is an interpretable and accurate alternative to stateof- the-art and black-box ML-based methods for AoA estimation.

Citation: S. -K. Chou, **M. Zhao**, C. -N. Hu, K. -C. Chou, C. Fortuna and J. Hribar, &quot;SABER: symbolic regression-based angle of arrival and beam pattern estimator,&quot; <i>IEEE Trans. Instrum. Meas.</i>, vol. 75, Apr. 2026, Art. no. 5501213.

[Back :four_leaf_clover:](../publications/)
