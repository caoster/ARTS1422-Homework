import numpy as np
import matplotlib.pyplot as plt

boston = np.loadtxt("boston.csv", delimiter=",", skiprows=1)

vital = boston[:, 9]
plt.hist(vital)
plt.title("Tax")
plt.savefig("Evaluation.png")
