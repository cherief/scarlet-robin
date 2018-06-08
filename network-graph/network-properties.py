import networkx as nx
import matplotlib.pyplot as plt

G = nx.DiGraph()


G.add_edge(1, 2)
G.add_edge(1, 3)
G.add_edge(3, 2)
G.add_edge(1, 6)
G.add_edge(3, 4)

print("Number of nodes:", G.number_of_nodes())
print("Number of edges:", G.number_of_edges())

for i in G.nodes:
	print("In degree of {}: {}".format(i, G.in_degree[i]))
	print("Out degree of {}: {}".format(i, G.out_degree[i]))

# plt.subplot(111)
# nx.draw(G, with_labels=True, font_weight='bold')
# plt.show()