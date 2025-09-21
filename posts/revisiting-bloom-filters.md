---
layout: base.njk
title: Revisiting Bloom Filters - 21 Sep 2025
tags: posts
---

# Revisiting Bloom Filters

### Background
In a recent conversation, there was a mention about using Bloom Filters and all I could remember was that, they were basically like a hash set but with an aspect of probability involved, so I wanted to revisit the concept again to refresh my understanding. This one should be pretty short though.

### Use case
You have a value and you want to check for its existence in a large set, what do you do? We have the usual options, linear search (bad) and the obvious binary search (pretty fast), but what if you could do it faster? Hashing doesn't really make a difference because what's changing is only the time per comparison but not the number of comparisons themselves. That's where this comes in.

### Intuition
Bloom filters are a compromise between hashing and a direct lookup. Basically, you generate hashes, and you map them into deterministic positions so that it becomes an O(1) lookup. The tradeoff being, the mapping to determinstic spots mean that there is a higher probability of conflicts and that's where it becomes a probability.

### Things to consider
These are extremely handy when the false positives are tolerable i.e., if the use-case can tolerate the algorithm saying that the given key exists in the set, although it might not exist in reality, then these make excellent candidates. The data structure also ensures that if something doesn't exist in the set, then you get 100% accurate false response. So, for applications like recommendations or initial pruning etc. , this data structure makes a great candidate.

### Simplified working
1. First, we need to decide on the expected number of items we want to store in the filter, let's call this 'n'.
2. We need to select the size of the bloom filter itself, which is a simple bit array. Let's call the size of this array 'm'.
3. Next, we need to select the number of hash functions to use, let's call this 'k'. These hash functions will be applied to each input item to generate 'k' different hash values.
4. We start with an empty bit array (all bits are 0). When we add an item to the filter, we feed it to our 'k' hash functions. Each hash function's output is mapped to an index in the bit array (e.g., via a modulo operation), and we set the bits at those 'k' indices to 1.
5. To check if an item exists, we perform the same process: we hash the item 'k' times and check the bits at the resulting 'k' indices. If any of the bits are 0, the item is **definitely not** in the set. If all the bits are 1, the item **might be** in the set. It's not a certainty because those same bits could have been set to 1 by other items. This is the source of false positives.
6. The probability of false positives is determined by the size of the array ('m'), the number of items stored ('n'), and the number of hash functions ('k').


### Things to remember:
1. Deletion is not possible in bloom filters (since the bits are shared among multiple entries, flipping a random bit would affect the hash of a completely different entry as well).
2. Hash functions can be simple and do not have to be cryptographically secure since the collision bottleneck is due to the modulo operation.
3. For planet sized applciations, you will quickly overflow the typical RAM limits so maybe try other options, Cuckoo filters etc.


### Useful Things:
```
Number of items in filter: n = ceil(m / (-k / log(1 - exp(log(p) / k))))
Probability of false positives: p = pow(1 - exp(-k / (m / n)), k)
Number of bits in filter: m = ceil((n * log(p)) / log(1 / pow(2, log(2))));
Number of hash functions: k = round((m / n) * log(2)); 
```

The above formulas where from [Bloom Filter Calculator](https://hur.st/bloomfilter/?n=10000000000&p=1.0E-9&m=&k=)


And for more detailed explanation [GeeksForGeeks](https://www.geeksforgeeks.org/python/bloom-filters-introduction-and-python-implementation/)
