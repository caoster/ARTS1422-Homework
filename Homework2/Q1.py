import numpy as np

from sklearn import decomposition, manifold

boston = np.loadtxt("boston.csv", delimiter=",", skiprows=1)

boston_PCA = decomposition.PCA(n_components=2).fit_transform(boston)
np.savetxt("boston_PCA.csv", boston_PCA, delimiter=",")
boston_TSNE = manifold.TSNE(n_components=2).fit_transform(boston)
np.savetxt("boston_TSNE.csv", boston_TSNE, delimiter=",")
boston_MDS = manifold.MDS(n_components=2, normalized_stress="auto").fit_transform(boston)
np.savetxt("boston_MDS.csv", boston_MDS, delimiter=",")
