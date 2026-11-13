/* =====================================================================
   ADJUSTMENT REPORT – script.js (full version)

   iPhone: PDF and Excel are both uploaded to Creator, then a green
   "Download file" button opens Creator's own file URL (iOS viewer).
   ===================================================================== */

/* New Medi Elves logo (embedded so the PDF never depends on a network fetch). */
const MEDI_ELVES_LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAABNCAYAAABaMa29AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABtRSURBVHhe7Zx5eFTV/f9fd5Zsk5mQjSwkQNjCKiRsaQgaUQjmixUsVP1W0NqiFqqValt+D4g+Vq1Ff6Corf6+gqyypEKLssWFQAiLgRiWbEwWsu/JJJlMZpKZOb8/SG4zE+JK+n0eva/nuU9yz/mcZc5933M+Z5mRhBACBYUBQuUeoKBwM1EEpjCgKAJTGFAUgSkMKIrAFAYURWAKA4oiMIUBRRGYwoCiCExhQFEEpjCgKAJTGFAUgSkMKIrAFAYURWAKA4oiMIUBRRGYwoCiCExhQFEEpjCgKAJTGFAUgSkMKH0EpnwHROFm0kdgrZY29yAFhe9MH4HlV151D1JQ+M5I7t+L3HT0HVbOW45apabD2kFzU7M8bEqSJNv5+PhgMBhQqfpotA9Wq5Xm5maX9ABqtRqDwYCnp6dL+M3E6XTS1NREcXExBoOBsWPHQrcrkJ+fz+HDh6mqqiI8PJwHHniA8PBw9ywA6OzspKWlBafT6R7Vh96fs6ftAgIC0Gq1vaygubmZ4uJigoODGTp0qEvcD4U+Alu1azUPzFzMjFHTSE9PZ83aNTQ2NMqNJoRAkiRiYmJ49tlnGTNmTO/kfbBarWzbto0333xTDuvJKzIykrVr1xIfH98rxfenrKyMU6dOcfHiRS5fvkxFRQXt7e3cf//9vPTSSwAYjUbWrl1LamoqVqsVb29vkpOTef/99/sIASA9PZ2nn36ajo4O96g+9G6rHjZs2MBtt91GamoqFy5cIDs7m2vXrtHW1sYf//hHHn300V45/IAQbjy5/Y/ioXceF0IIYbVaRUFBgdi4caMICgoSKpVKvnQ6ndizZ49wOBzuWbhQW1srEhMThSRJQqVSyX8XLFggcnJyRFdXl3uS780rr7wi9Hq90Gg0Qq1Wy+X+5je/kW0OHz4swsLChCRJ8jV69GhhNBpd8urBZDKJzZs3i9GjR7u0Q2BgoHjwwQfFunXrxLp168Rzzz0n1q5dK375y1+KqKgo2e6NN94QtbW1YsiQIUKr1crharVavPbaa+7F/WDoI7C1+14QI56ZLNJy0oXT6ZTDV6xY4dKwKpVKLFmyRNTU1LikdycjI0N4enrKaXoElp6e7m56U7l69aoIDw+Xy1OpVGLFihVy/JkzZ0RsbKxQq9VCkiShVqtFYmKiaG1tdcnHnY0bNwp/f385z+joaHHs2DF3MyGEEDk5OeKuu+4SWq1WPPHEE0IIIbKzs0VsbKxLvX7IAuvjQAXqAnA47bz5ybtcqy+Tw0eMGAFu3X5qaipXrlyR72/Ejh076Orq6rP84eXl5XJ/sxk6dCgJCQl9/L4eJk2axMqVK7njjjuIi4tjwYIFvPzyy+j1endTF4YNG4a3t7d87/65ejN+/Hj+9Kc/MXr0aPLy8gAIDg5m7Nixcr0kSeq3jj8E+ggsMjDiugNca+Ttz/4fZQ0V0EsQvf2TtrY23nvvvX4buaGhgYMHD6LT6fo8uG/iLH8fJEnCz8/PPVhGp9Px8MMPs3XrVrZt28auXbv4yU9+4m7WB3dBfJ04EhISWLJkCYWFhTgcDiRJQqPRuNj0134/BPoIbPTgkUiSigBPP45e/ozXj76NsboIpOuNOX36dNRqtWx/5MgRLl265JJHD/v378dkMhETE0NgYKAcLklSv42an5/PgQMH2LJlC++//z4ff/wxFRXXRX4jhBDU19eTmprKtm3b5DQNDQ1f+/BVKhVhYWEEBASQk5NDWlqau0kf3Ovtfu+OWq1m+fLl8uTiRjgcDvLy8sjMzOT8+fOcP39e/v/ixYs0NzcD0NraSnZ2NpmZmXJ8Xl6ePPHo6Ojg9OnT7N69my1btrB7927Onj1LV1eXW4nXcTqdZGdnk5KSwpYtW9i5cyfHjx+nqanJ3fQ74/oqAWOGjMJb7YkAhhhC+fjSMUoaypjmPZHg4GBGjx6NzWYjKysLunux9evXs2vXLpd8HA4Hf/vb3zAYDMyfP5+tW7fKcUKIPh+6pKSEV155hfT0dNra2uR4T09P/P39Wbx4MU899RS+vr5yGiEEW7Zs4b333qOmpgar1YoQAk9PT0JCQvqU0UN7ezsnT54kMzOT7OxsSktLaWtrIyoqisTERHfzb43D4SAjI4MjR47w8MMPEx0dzQMPPHDD2aUQgo6ODl544QW5TXvCJUkiJCSENWvWkJSURGFhIatWraKmpkaOnzRpEi+88AL5+fls2rSJyspK2tvbcTqdqNVqdDodUVFRrFmzhltvvVXOv7CwkNWrV3PlyhXMZjN2ux2VSoWXlxeBgYEsWrSIlStXfuUo8I1wd8qEEOJX764U09clit9t/YOI/uNUEblqvBjx9C3i12+uENv37RAvvviii7Ov0WhEXl6eSx7p6enC09NTTJ06VWRkZIiJEye6OPmff/65bJuVlSWmTp0qtFqt0Gg0Ys6cOeL8+fPiwoULIj4+XqjVaqHT6cTy5cuFzWaT061evdplAhEbGyu2bdsm0tPTxbJly+QZZM/VM4vMyckR4eHhwsPDQ3byJUkSkydPlvPuj/3794shQ4bIeY4ZM0YcPXrUxcZsNovVq1eLKVOmiFOnTrnEVVVViaVLl/Zx8ouLi8V9990nh0mSJHx9fUVqaqo807bb7aK+vl5MmDBBaDQakZycLLKyssS6devkiUdwcLDYuHGjqKqqElu3bhXBwcFCrVaLqKgocfjwYSGEEOXl5WLmzJlyu65cuVKUlZWJiooK8eKLLwqtVisiIiJEWlqaS92/C32GSIAFMfNpsjTTaDGRNHYOnioPOh1dHCtO4/9e/Dv1g1qYNXc2fv5+qFQqnE4nmzZtkv0qp9PJ3r17sdvtLF68GG9vbzw8PFzK6OzshO41q+eee47s7GwcDgehoaG8/fbbTJ06ldjYWFatWoVOp8NqtXLs2DEOHTqEEIK9e/fy7rvvyr1UdHQ0f/3rX1m2bBkJCQm8++673HnnnTccwqKjo/nwww+ZOXPmDeO/jt5pnE4nbW1tNDQ00NDQQG1tLadOnWL79u2I67N0l7Q3QghBVFQU9957r4sr4XQ6KS8vl302tVqNn58fFouFESNG8Oyzz5KXl8f777+PyWRCkiTuu+8+fve73xEWFsZDDz3EnDlzEEJQVlbGO++8Q2NjIzt27CA3NxchBEFBQfz6178mMjKSIUOGsGbNGp555hkcDsdN8ZNvKLA5E24jSBdITnU+/jo/5o5KRCf5ANBoaeZfJUdRzfLhzkfvYlL8ZELDQjl27Jg8U6qsrOTEiRN4eHhw7733olKpXPw2gK6uLhwOB6mpqWRkZMgP4o477pBX2wGmT58ui7Ouro4zZ87Q1NTE1q1baWu7vm+qVquJi4tj5syZcjqVSsWwYcPk+96o1WpmzJhBQkKCHPZ1/lpves8Aq6ureemll1i8eDELFy5k7ty5LFy4UB7G+qN3eT27IbGxsUyfPl2O6+zs5NChQ1itVtn29OnTlJeXM3XqVIKDg0lJSaGyshK6P9eyZctc8p4+fTp0i7ioqIiLFy9SUFCAxWKBbnfh3LlzmM1mOc0f/vAHbr311u8/PPYnMF8vHUum3UOjuYlPr55kWOhQfj75HkJUQTgsdhxOO8XNpVzoukLIXUOZvHAaYSOHcPDgQex2O59++im1tbXMmjWLMWPGIElSny0lh8NBc3Mz58+fl51YQJ7JCSGwWCy0tLTID6qzs5P6+noyMzMpKSmR3zAfHx/Gjh3bZ6bKVwjHXfRfJYb+EELIvUpoaCgRERGMHTuWmJiYPjPF/uhdv+HDhzN79mzZz3Q6neTk5HD58mXoLm/Hjh1otVqWLFmC0WiU/TZJkvDy8mLSpEkA2O12TCaTy85DS0sLdXV1eHt7o1arEULQ3NzMa6+9xoYNG0hPT8dsNuPv78/mzZvlvL4PNxSYSqUiOSaJ6JCRlDVVkPLlP2mT2vllwi+4J3o+HiYNdksXnfYucuoLKNJV4DXTj069narqKk6ePInJZGL58uXQ/Wa5b784nU5MJhPXrl1zaeQjR47w5JNP8thjj/H444/z9NNPu7xdTqeT0tJSOUwIgZeXF0FBQbJNf3yViPoT4tcRHBzMY489xsaNG3n99dd5/fXXWb9+PXFxce6mLvSuS8//Go2GpKQkl563urqazz77DCEEFRUVnDhxQp6MVFZWUl1dLefhcDhYu3YtK1eulNtv9+7dLuU4nU4SExMZNGgQUvdsvqioiPXr1/Pkk0/y1FNPkZKSgiRJfZ7Zd+GGAgMYMXg4D8xcjI/Wm5qmOg5eOsqHBR8RFBrM/7n39yQETsdZ2YnT6qC9sx2jpYRT5vNs/2QXefl5hISEMG/ePOgWmLsPBmCz2VzEA/DJJ5+wb98+Tpw4QUFBARqNhp///Oc8/fTTbNy4kd/+9rcIIWQfTupel3Ifgnvo/SBvhk+BW55qtZqAgADCwsIIDQ0lPDyc6dOns2jRom8kWtE9G+xhwoQJxMfHyw/XbDaTmZlJTU0Nn332GQ0NDSxduhSdTifP/nro6Ohg8+bNHDx4kLNnz1JRUcHIkSP51a9+xbPPPsurr75KYmIiycnJPPbYY3K5kiTR0dHBpUuX2L59O7///e955JFHKCgokPP+rvTbj3tqPfnp1P8iv9rI3i/201LWTH5HByUNpYQZQrl7WhJJM+byzr73KLaW4h3py9X6IrrsnQSMCmZW/Cy5q3cfjuhuWK1W22dFf8OGDfKUvmdo7X2p1Wpyc3NdhiCHw4HNZnPJp4feD++rejC+QXwPPW9+fwLy9PRkxYoVPPLII/j4XPdd+6Mnrx48PDy4//772bdvHyaTCSEEOTk5ZGVlcejQIex2O8uXL0etVuPl5eVSBy8vLwoLC9FqtXLb9W5DtVotP4eeQwarV6/m8uXLcj0cDgdVVVUcOHCAzs5O/v73vxMSEiKX8W3ptwcDCNQHsGr+Cn465S4ChwXRUdpOc34jJWXXeDvtPd7L3sHDS5fx0E/ux3HVSleLjeLGUoJmhvHgr5bKH8a9B+v5MDqdrk/l8/Pz0ev16PV6fH198fHxwcvLCw8PDzQaDZIkERYWhk6nkxu3o6OD6urqrxVI77fdna9L605P2f2l8/DwwGAwoNFosNlsPP/887z66qvuZjdk9uzZxMbGyvclJSVs376d3NxcfvaznxEYGIharSYoKAiDwSDb2e12ysvLMRgM6PV6dDqdS/v1+F0tLS3YbDbmz5/PuXPn+Oijj1i0aBEhISHyi2u32zlz5gyHDx+W8/8ufKXAAEL9Q3lxybPcHZ3E6FtGow/QYylupS2/BWNOIS+mrOdyWx7/FT8fVZnAWtvBuWsXsKg7oPvl0mg0Lj1VzxAXFBTElClTXOIOHTrEtWvX5PsehBA0NDRQUFDAmDFjCA8PdxFYbm5unxXonoff8/dGAutPIP3RX6/VHzabjc2bN7N+/fo+7kB/qFQqnnrqKZeHffDgQcrKyli6dKlsFxUVxbhx4+R7h8PBrl27btib2+12SktLqays5JlnnmHVqlU4nU48PT1JTk5m9+7d7N+/n8WLF8tCNJlMlJeXu2f1rfhagQHovfVoiyGg0IcRHpFMjY1h3MhoPM1a2i6bOJN2jo9PH8EDLR1lZlobWzhjzEQ4rz+8ni66N1VVVXh6ejJnzhxiY2PlB1deXs5f/vIXjEYjDocDukVQUFDAhg0b+OCDDwgNDeXuu+/Gy8sL0b3WlJWVxfHjx+V1sfb2doqKihC9hrKeqXlv3AXzdX5aR0eHXC96+YA3wmKxcPDgQTZs2IDNZiMpKcndBHGDXQ2AO++8kylTpsg2nZ2dTJkyhcmTJ8s2Y8aMISkpCb1ejyRJOJ1OUlJSSElJcZmZW61Wjhw5wiuvvEJ2djbNzc0cOHCAjIwM2Uaj0RAXF8emTZvw8/NDkiS8vb3x9/eXbb4L6ueff/5598Ae7HY7dXV1HD16lLfeeosLp89jr+8k0mcIyxY/yE/nLmDyqElEBAyhs6OTyppKumxd4BAMHRbJ/Ji5OOwOzp49S0pKCrW1tdDLqYyNjSU6OpqAgAB5z81ut2M0Grly5QpGo5Evv/ySf/3rX2zbto3q6moeffRRhg8fzqhRo6irqyM7Oxu6p+ClpaVYLBaKi4vZunUrhw8fdum1bDYbcXFxhISEUF9fzz/+8Q95H1WSJHx8fEhMTCQ4OLjPC9Eze922bRsXLlyQ8/X29iY8PByz2YzRaMRoNFJYWEhubi779+/nrbfeori4mMGDB/Pyyy9z7do19u7dS1lZmSxMvV5PUlKSS0+u0WjQ6XQcOHAAut2MJ554goSEBLln8/DwIDIykpqaGq5evYrdbsdsNpOVlYXRaCQ/P58zZ86wa9cu9u7dy7hx41i4cCFHjx4lKyuLixcvEhAQwJAhQ/Dy8sJut5OVlcUHH3xAZ2cn06ZN4/HHHyc0NFSu17fGfWm/NxkZGWLevHkiMjLS5ZCcXq8X8+fPF1lZWcJqs4q6pjqRW5Qn9n/yT7F41QMiaHaEWPrXX4sue5d4/vnnxdixY+UtnZ6zVz3bSNu3bxcWi0WkpaWJhQsXyuX0bGP4+/sLg8Egli9fLi5duiTsdrtcv6qqKvHcc8+J4OBgoeresgoKChLh4eFi3Lhx4p577nHZelGr1WLSpEliz549YsWKFSIwMFCOkyRJeHl5iZiYGLFz506XdhDd58cSEhLEoEGD5DQqlUp4eHiIsLAwMWLECJdr2LBhws/PT96u+sUvfiHq6urEtGnThK+vr0seer1eLF68WJw/f96lzPr6ehETEyMfhszIyHA5oyeEEE6nU5SWloo///nPYvDgwXK+Wq1W+Pn5CT8/PxEWFibeeOMNUVNTI5xOp/j444/F7bffLjQajYiMjBQJCQli0aJFIjk5WURHRwu1Wi3mzZsnTp069b0PhPY5Mt2b6upqTp8+jdlsln2V3m/drFmzXJx0h9OB2dJOytEPuVh2hY2/+yuZX2RiNBr7+ENS97GVmJgYxo8fj9PpxGKxcO3aNY4fPy77YSNGjGDu3LlERETg7e3dZziy2WzyzkFeXh5CCMaPH8+CBQtoamri7Nmz8jApuhdGZ8yYQXl5ORUVFXJ4T74qlYqYmBgmTpzoUk5VVRUnTpyQ/Zve6Xr/7Ymj1xKEEIK4uDiGDh3Khx9+iNPp7GNrMBiIj493bU+Hg8zMTPLy8oiIiCAuLu6Gi8l0t4PJZOLkyZNcvnyZlpYWfH19mTRpErfffjv+/v7yRMtut2OxWKirqyMjI4PCwkJaWlrQarVERUURHx/P6NGj0el0fXryb8tXCuz7YCwrZFTkyD6CUPhxMWACU1Dgm84iFRS+Kz86gQkhyC6+RJ2pHgBjVRFn879wN7sp1DTXci4/k7aOb7b+5Y7dYedUzmm5rt+VhpYGzl097x78H+FHJzCH08HOE3vILc8nv+Iqbx15lxZLq7vZTcFkNlFYVYS18/pxm3eObuZC0ZfuZv3icDrILc3HZG5xj/pWFFQaee/zbe7B/xG+ch3sh4hDONlz6h94e3hxNPtTJg+fSPLUeXhoPKhsqGTDwTf55xeHMHjpCQsIRaVScfRCKhs+fou88gKGBQ/F4KPn4NlDXCy5ws70PWTknSUyKIIAX9dFyca2ZmpN9YwMiyLt0kneTt1MWV0Zgw3BRAQNcbFtaG3kfz7Zyva0D7DarIwKu/4trsvXcogKHQ5C8I/T/yLz6nn+dux/aG1v41T+GT7ISCFEH0zIoMFcMH7J4QvHOPblpxzOOkaYXyjBfkEYqwtJyzvF/bN+Rpe9i48yj/DGobf5wnieKcNvwdvz39+Sutn86HowgDarmZ0ZezF1tJA4YTY6Lx1CCNYfeB2Dt4Hbx89my+c7qWqu4UpJDq9+/CYPzvo5li4rH549SLu1nVNXz7L91G4WTl2AQLDzxB5MZpNLObWtdZwv+RKztZ3xQ8cRpA9gfMQ4hg12/ZkAu8NB2uWTlNSX8t8/WULa5XTaOszYnQ7OFGVS39pAa0cb+77Yf/0Q5/S7efXwJjw0WgJ0/hw49xFmaztXa4rYkbGHGaOmEawP4p1PNtPY1iQviQAc/fITPr+cxiO3L0ONhuf2/cWlLjebH6XAVCqJ2KgpGLz0pF78HIvNgkBwyniW6qYaLpVeodXaisNh53huOipJIi0vg+a2Ziw2C7auThCCxAmzmTluOvHRMzFb2zHb2l0LEvJ2LMNDhjHIx8CwwZGE+rtu8KtUEmH+obS0t/BpThoJE+Lx1HT/XocQCAQg4eupY27MHdw2+VYCfPy5K2YeEyLHoVarcQonEjAxcgJ3TElkzqTbsHR20NHZcX0tjusiK64vpbqpliNZqXQ5OmnrGNhfU/pRCszXU0fylHk8lPjffFF4gfTc00hIDA8ayqiwEcRHx5E8eR5+Pn4MC4rA4GMgbtQ0ZkXHMX1ELD6e3iBJlDdUUFRTQkl9KTovHzy1rj/iIknSvxV2XW/UtzbQ5v4TWQL8fQeRHJPE0MAI3vl0CxXd30ftnR7RffVCkiSkbiMBNJibMFYVUVhThLeHJ1qNFiGQbQb5+DEkMJxZ0XFMHRFD8uS5rhneZH50AlNJEuOHjCVQ78+U4bdwz/RksoovYe20svyOh2hoa+Ry2RUcwolapeK2ibOZMWoqF8uuUFJ3DQ+tFrVKjYREm8XMkaxU6kz13D7xVgbpXM+w++kMjAoZibfH9T3G+OiZVDZWUVL772/M92C2WTDWFGG2tXPnxNsINASillREh4/Gz8eAt4cXEyLG4an1QK1SMWX4LXhoPAg2BBE1eCgatQZJAlunlc8uHudKWS5zb5nDIN0g/H0HMXnY9Z2JW8fNYmRoFFcqcsmrLECvu/HOwM3iR7fQKhDUNteh9/ZF56XD2mmltqWeIf5hOBFUNVbR5ehisN9gDD7XTymY2k3UtTTgpfUkZNBgPLWerN6+jsGDglk4YwFajZYQv8F4aF1P7XbYOjBb2xnk64dWrcXU3kJjayNBhkD83MTYae+iprmGjk4rAb7+BBoCAUGdqR4/n+vnyhpaGwk2BKNSSVQ2VhE6KBRblxWbvRN/3SD2ZnzIyfzT/OmeVQjhJNQ/BG8Pbyw2CyZLK+H+oQghaGxrorGtCa1aQ2RQBFrN9z8a3R8/OoHdLLZ9tosAvT93z0h2j/pf4+SVU+RXXeXReY+4R/2voQhMYUD50flgCv9ZFIEpDCiKwBQGFEVgCgOKIjCFAUURmMKAoghMYUBRBKYwoCgCUxhQFIEpDCiKwBQGFEVgCgOKIjCFAUURmMKAoghMYUBRBKYwoCgCUxhQFIEpDCiKwBQGlP8PdRAXHhml94EAAAAASUVORK5CYII=";
const DEFAULT_EMBEDDED_LOGO = MEDI_ELVES_LOGO_BASE64;

let ITEM_ID_TO_NUMBER_MAP = new Map();

const REPORT_FOOTER_LINES = [
    "CONFIDENTIAL \u2013 CONTAINS SENSITIVE HEALTH INFORMATION",
    "This document contains confidential patient and claims information and is intended only for the named recipient and authorised personnel. Unauthorised access, use, copying, forwarding or disclosure is prohibited. If you received this document in error, please notify Medi Elves immediately, delete all electronic copies and securely destroy any printed copies.",
    "Medi Elves  |  1800 956 692  |  admin@medielves.com.au"
];

let LOGO_DATA_URL = (DEFAULT_EMBEDDED_LOGO && DEFAULT_EMBEDDED_LOGO.indexOf('data:image') === 0) ? DEFAULT_EMBEDDED_LOGO : null;
/* The embedded logo is 152 x 77 px, so the aspect ratio is known up front. */
let LOGO_ASPECT = 152 / 77;


/* ─────────────────────────────────────────────────────────────────────
   BOTTOM SCROLLBAR SYNC
   ───────────────────────────────────────────────────────────────────── */
let _bottomScrollSyncing = false;

function initBottomScrollSync() {
    const wrapper = document.querySelector('.table-wrapper');
    const proxy = document.getElementById('bottom-scroll-proxy');
    const proxyInner = document.getElementById('bottom-scroll-proxy-inner');
    if (!wrapper || !proxy || !proxyInner) return;

    window.addEventListener('resize', updateBottomScrollWidth);

    wrapper.addEventListener('scroll', () => {
        if (_bottomScrollSyncing) return;
        _bottomScrollSyncing = true;
        proxy.scrollLeft = wrapper.scrollLeft;
        _bottomScrollSyncing = false;
    });
    proxy.addEventListener('scroll', () => {
        if (_bottomScrollSyncing) return;
        _bottomScrollSyncing = true;
        wrapper.scrollLeft = proxy.scrollLeft;
        _bottomScrollSyncing = false;
    });
}

function updateBottomScrollWidth() {
    const wrapper = document.querySelector('.table-wrapper');
    const proxyInner = document.getElementById('bottom-scroll-proxy-inner');
    if (!wrapper || !proxyInner) return;
    const table = wrapper.querySelector('table');
    if (!table) return;
    proxyInner.style.width = table.scrollWidth + 'px';
}


/* ─────────────────────────────────────────────────────────────────────
   LOGO LOADING (for PDF)
   ───────────────────────────────────────────────────────────────────── */
function dataURLDimensions(dataUrl) {
    return new Promise((resolve) => {
        const probeImg = new Image();
        probeImg.onload = () => resolve({ w: probeImg.naturalWidth, h: probeImg.naturalHeight });
        probeImg.onerror = () => resolve({ w: 200, h: 200 });
        probeImg.src = dataUrl;
    });
}

async function fetchHeaderLogoAsDataURL() {
    try {
        const img = document.querySelector('.report-logo');
        if (!img || !img.src) return null;
        const resp = await fetch(img.src, { mode: 'cors' });
        if (!resp.ok) return null;
        const blob = await resp.blob();
        return await blobToDataUrl(blob);
    } catch (e) {
        return null;
    }
}

let LOGO_MEASURED = false;
async function loadLogoDataURL() {
    if (LOGO_DATA_URL && LOGO_MEASURED) return LOGO_DATA_URL;

    let dataUrl = (DEFAULT_EMBEDDED_LOGO && DEFAULT_EMBEDDED_LOGO.indexOf('data:image') === 0)
        ? DEFAULT_EMBEDDED_LOGO
        : await fetchHeaderLogoAsDataURL();

    if (!dataUrl) return null;

    const dims = await dataURLDimensions(dataUrl);
    LOGO_DATA_URL = dataUrl;
    LOGO_ASPECT = (dims.w / dims.h) || 1;
    LOGO_MEASURED = true;
    return LOGO_DATA_URL;
}


/* ─────────────────────────────────────────────────────────────────────
   INIT
   ───────────────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
    initMobileExportBindings();
    waitForZohoSDK(initWidget);
});

function waitForZohoSDK(callback, attempts = 0) {
    if (typeof ZOHO !== "undefined" &&
        ZOHO.CREATOR &&
        ZOHO.CREATOR.UTIL &&
        typeof ZOHO.CREATOR.UTIL.getQueryParams === "function") {
        callback();
        return;
    }
    if (attempts > 100) {
        console.error("Zoho Creator SDK failed to load.");
        return;
    }
    setTimeout(() => waitForZohoSDK(callback, attempts + 1), 100);
}

async function getRecords(config) {
    const maxRecords = config.maxRecords || 200;
    const wantTotal = config.toIndex || 1000;
    let allRecords = [];
    let recordCursor = null;
    let seenIds = new Set();

    while (allRecords.length < wantTotal) {
        const pageConfig = {
            app_name: config.appName,
            report_name: config.reportName,
            max_records: maxRecords
        };
        if (config.criteria && config.criteria.trim() !== "") {
            pageConfig.criteria = config.criteria;
        }
        if (recordCursor) {
            pageConfig.record_cursor = recordCursor;
        }

        let resp;
        if (ZOHO.CREATOR.DATA && typeof ZOHO.CREATOR.DATA.getRecords === "function") {
            resp = await ZOHO.CREATOR.DATA.getRecords(pageConfig);
        } else if (ZOHO.CREATOR.API && typeof ZOHO.CREATOR.API.getAllRecords === "function") {
            resp = await ZOHO.CREATOR.API.getAllRecords(pageConfig);
        } else {
            throw new Error("No known getRecords method found on ZOHO.CREATOR.");
        }

        const pageData = (resp && resp.data) || [];

        const newRecords = pageData.filter(r => {
            const id = r && (r.ID || r.id);
            if (id == null) return true;
            if (seenIds.has(id)) return false;
            seenIds.add(id);
            return true;
        });
        allRecords = allRecords.concat(newRecords);

        const nextCursor =
            (resp && (resp.record_cursor || resp.recordCursor)) ||
            (resp && resp.headers && (resp.headers.record_cursor || resp.headers["record_cursor"])) ||
            null;

        if (pageData.length < maxRecords) break;
        if (!nextCursor) break;
        if (!newRecords.length) break;

        recordCursor = nextCursor;
    }

    return { data: allRecords };
}

async function initWidget() {
    loadLogoDataURL();
    showLoading('Loading claims data');

    try {
        await ZOHO.CREATOR.UTIL.getQueryParams();

        const doctorResp = await getRecords({
            appName: "claims-management",
            reportName: "Doctors1"
        });
        const doctors = doctorResp.data || [];

        const initParams = await ZOHO.CREATOR.UTIL.getInitParams();
        const loginUserEmail = (initParams && initParams.loginUser) ? initParams.loginUser.toLowerCase() : '';

        const matchedDoctor = doctors.find(doc => {
            const email = (doc.Email || doc.Doctor_Email || doc.email || '').toLowerCase();
            return email && email === loginUserEmail;
        });

        const docDisplayEl = document.getElementById('f-doctor-display');
        const docHiddenEl = document.getElementById('f-doctor');

        if (matchedDoctor) {
            const docId = matchedDoctor.ID || matchedDoctor.id;
            const docName = matchedDoctor.Doctor_Name || matchedDoctor.Name || matchedDoctor.Full_Name || '';
            if (docDisplayEl) docDisplayEl.value = docName;
            if (docHiddenEl) docHiddenEl.value = docId;
        } else {
            if (docDisplayEl) docDisplayEl.value = 'Not linked to a doctor account';
            if (docHiddenEl) docHiddenEl.value = '';
        }

        // Hospital dropdown (report is scoped to the logged-in doctor)
        try {
            const mapResp = await getRecords({
                appName: "claims-management",
                reportName: "Doctor_Hospital_Mappings"
            });
            const mapRecs = mapResp.data || [];
            const hospItems = [];
            const seenH = new Set();
            mapRecs.forEach(rec => {
                if (rec.Status && String(rec.Status).toLowerCase() !== 'active') return;
                const hospVal = probe(rec, 'Hospital_Name', ['Hospital', 'Hospital_Details', 'Hospitals']);
                const hospId = extractLookupId(hospVal);
                const hospName = extractLookupName(hospVal, ['Hospital_Name', 'Name']) || hospId;
                if (hospId && !seenH.has(hospId)) {
                    seenH.add(hospId);
                    hospItems.push({ value: hospId, label: hospName });
                }
            });
            ALL_HOSPITAL_ITEMS = hospItems;
            populateSSDropdown('ss-location', ALL_HOSPITAL_ITEMS, 'All Locations');
            buildDoctorHospitalMap(mapRecs);
        } catch (e) {
            try {
                const hospResp = await getRecords({
                    appName: "claims-management",
                    reportName: "Portal_Hospitals"
                });
                populateHospitalDropdownDirect(hospResp.data || []);
            } catch (e2) { /* leave dropdown empty */ }
        }

        // Items master (for item numbers)
        try {
            const itemsResp = await getRecords({
                appName: "claims-management",
                reportName: "Items"
            });
            ITEM_ID_TO_NUMBER_MAP = new Map();
            (itemsResp.data || []).forEach(item => {
                const id = item.ID || item.id;
                const num = item.Item || item.Item_Number || item.Item_Name || item.Item_Code
                    || item.Name || item.name || item.zc_display_value;
                if (id && num) ITEM_ID_TO_NUMBER_MAP.set(String(id), String(num));
            });
        } catch (e) {
            console.warn('Could not load Items master report — item numbers will show as "—".', e);
        }

        const claimsResp = await getRecords({
            appName: "claims-management",
            reportName: "Doctors_Claim_Report"
        });
        const claims = claimsResp.data || [];

        if (ADJ_TYPES.length === 0) {
            const seen = new Map();
            claims.forEach(rec => {
                const raw = probe(rec, CLAIM_FIELDS.adjustmentType,
                    ['Adj_Type', 'Adjustment Types', 'Type', 'Adjustment_Types']);
                normalizeToStringArray(raw).forEach(v => {
                    const name = v.trim().toUpperCase();
                    if (name && !seen.has(name)) seen.set(name, true);
                });
            });
            ADJ_TYPES = Array.from(seen.keys()).map((name, idx) => ({
                code: idx + 1,
                name: name,
                badge: 'badge-other'
            }));
        }

        buildAdjOptions();

        const allRows = buildClaimsData(claims);
        allData = allRows.filter(r => r.type && r.type !== '—');

        if (matchedDoctor) {
            const docId = matchedDoctor.ID || matchedDoctor.id;
            allData = allData.filter(r => r.doctorId === docId);
        }
        filtered = [...allData];

        const ssList = document.querySelectorAll('#ss-location .ss-list .ss-option');
        if (ssList.length <= 1) populateHospitalDropdown(allRows);

        populatePatientDropdown(allData);
        populateStaffDropdown(allRows);

        renderTable();
        initBottomScrollSync();
        hideLoading();

    } catch (err) {
        console.error('Init error:', err);
        hideLoading();
    }
}


/* ─────────────────────────────────────────────────────────────────────
   DROPDOWN HELPERS
   ───────────────────────────────────────────────────────────────────── */
function buildDoctorHospitalMap(mapRecs) {
    DOCTOR_HOSPITAL_MAP = new Map();
    mapRecs.forEach(rec => {
        if (rec.Status && String(rec.Status).toLowerCase() !== 'active') return;
        const docVal = probe(rec, 'Doctor_Name', ['Doctor', 'Doctor_Details', 'Doctors']);
        const hospVal = probe(rec, 'Hospital_Name', ['Hospital', 'Hospital_Details', 'Hospitals']);
        const docId = extractLookupId(docVal);
        const hospId = extractLookupId(hospVal);
        if (!docId || !hospId) return;
        if (!DOCTOR_HOSPITAL_MAP.has(docId)) DOCTOR_HOSPITAL_MAP.set(docId, new Set());
        DOCTOR_HOSPITAL_MAP.get(docId).add(hospId);
    });
}

function populateHospitalDropdownDirect(hosps) {
    ALL_HOSPITAL_ITEMS = hosps.map(h => ({
        value: h.ID || h.id || '',
        label: h.Hospital_Name || h.Name || h.name || h.zc_display_value || h.ID || ''
    })).filter(i => i.value);
    populateSSDropdown('ss-location', ALL_HOSPITAL_ITEMS, 'All Locations');
}

function populateHospitalDropdown(rows) {
    const seen = new Map();
    rows.forEach(r => {
        if (r.hospitalId && r.hospital && !seen.has(r.hospitalId))
            seen.set(r.hospitalId, r.hospital);
    });
    ALL_HOSPITAL_ITEMS = [];
    seen.forEach((name, id) => ALL_HOSPITAL_ITEMS.push({ value: id, label: name }));
    populateSSDropdown('ss-location', ALL_HOSPITAL_ITEMS, 'All Locations');
}

function populatePatientDropdown(rows) {
    const sel = document.getElementById('f-patient');
    if (!sel) return;
    const names = [...new Set(
        rows.map(r => r.patientName).filter(n => n && n !== '—')
    )].sort((a, b) => a.localeCompare(b));

    sel.innerHTML = '<option value="">All Patients</option>' +
        names.map(n => `<option value="${n.replace(/"/g, '&quot;')}">${n}</option>`).join('');
}

function populateStaffDropdown(rows) {
    const seen = new Set();
    rows.forEach(r => { if (r.staff) seen.add(r.staff); });
    const items = Array.from(seen).sort().map(name => ({ value: name, label: name }));
    populateSSDropdown('ss-staff', items, 'All Staff');
}

function extractPatientName(val) {
    if (val == null) return '—';
    if (typeof val === 'string') {
        if (val.trim() === '[object Object]' || /^\d{10,}$/.test(val)) return '—';
        return val.trim();
    }
    if (typeof val === 'object') {
        if (val.zc_display_value && val.zc_display_value.trim() !== '[object Object]') {
            const trimmed = val.zc_display_value.replace(/\s+/g, ' ').trim();
            if (trimmed) return trimmed;
        }
        const keys = Object.keys(val);
        const prefixKey = keys.find(k => k.endsWith('.prefix'));
        const firstKey = keys.find(k => k.endsWith('.first_name') || k === 'first_name');
        const lastKey = keys.find(k => k.endsWith('.last_name') || k === 'last_name');
        const suffixKey = keys.find(k => k.endsWith('.suffix'));
        if (firstKey || lastKey) {
            const parts = [
                prefixKey && val[prefixKey],
                firstKey && val[firstKey],
                lastKey && val[lastKey],
                suffixKey && val[suffixKey]
            ].filter(Boolean);
            if (parts.length) return parts.join(' ').trim();
        }
        for (const v of Object.values(val)) {
            if (typeof v === 'string' && v.trim() && v.trim() !== '[object Object]' && !/^\d{10,}$/.test(v)) {
                return v.trim();
            }
        }
    }
    return '—';
}


/* ─────────────────────────────────────────────────────────────────────
   FIELD MAPPING
   ───────────────────────────────────────────────────────────────────── */
const CLAIM_FIELDS = {
    claimId: 'Claim_ID',
    hospitalLookup: 'Hospital',
    doctorLookup: 'Doctor',
    patientName: 'Patient_Name',
    adjustmentType: 'Adjustment_Types',
    adjustmentDate: 'Claim_Date',
    adjustmentAmount: 'Adjustment_Amount',
    notes: 'Notes',
    staff: 'Staff_Name',
    lines: 'Claim_Lines'
};

const LINE_FIELDS = {
    itemNumber: 'Item',
    originalAmount: 'Amount_Charged',
    adjustmentAmount: 'Allocated_Amount'
};


/* ─────────────────────────────────────────────────────────────────────
   LOOKUP EXTRACTORS
   ───────────────────────────────────────────────────────────────────── */
function extractLookupId(val) {
    if (val == null) return '';
    if (typeof val === 'object') return val.ID || val.id || '';
    return /^\d{10,}$/.test(String(val)) ? String(val) : '';
}

function extractLookupName(val, candidates = []) {
    if (val == null) return '';
    if (typeof val === 'string') {
        if (val.trim() === '[object Object]') return '';
        return /^\d{10,}$/.test(val) ? '' : val;
    }
    if (typeof val === 'object') {
        if (val.zc_display_value && val.zc_display_value.trim() !== '[object Object]') {
            const trimmed = val.zc_display_value.replace(/\s+/g, ' ').trim();
            if (trimmed) return trimmed;
        }
        for (const f of candidates) {
            if (val[f] && typeof val[f] === 'string' && val[f].trim() !== '[object Object]') return val[f];
        }
        const keys = Object.keys(val);
        const prefixKey = keys.find(k => k.endsWith('.prefix'));
        const firstKey = keys.find(k => k.endsWith('.first_name'));
        const lastKey = keys.find(k => k.endsWith('.last_name'));
        const suffixKey = keys.find(k => k.endsWith('.suffix'));
        if (firstKey || lastKey) {
            const parts = [
                prefixKey && val[prefixKey],
                firstKey && val[firstKey],
                lastKey && val[lastKey],
                suffixKey && val[suffixKey]
            ].filter(Boolean);
            if (parts.length) return parts.join(' ').trim();
        }
        for (const v of Object.values(val)) {
            if (typeof v === 'string' && v.trim() && v.trim() !== '[object Object]' && !/^\d{10,}$/.test(v)) return v;
        }
    }
    return '';
}


/* ─────────────────────────────────────────────────────────────────────
   DATE / AMOUNT HELPERS
   ───────────────────────────────────────────────────────────────────── */
function parseZohoDate(d) {
    if (!d) return '';
    const s = String(d).trim();
    if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
    const MONTHS = {
        Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
        Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
    };
    const m = s.match(/^(\d{2})-(\w{3})-(\d{4})/);
    if (m && MONTHS[m[2]]) return `${m[3]}-${MONTHS[m[2]]}-${m[1]}`;
    const dt = new Date(s);
    return isNaN(dt.getTime()) ? '' : dt.toISOString().slice(0, 10);
}

function formatDateDisplay(iso) {
    if (!iso) return '—';
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!m) return iso;
    return `${m[3]}-${MONTHS[parseInt(m[2], 10) - 1]}-${m[1]}`;
}

function parseAmount(val) {
    if (val == null || val === '') return 0;
    if (typeof val === 'number') return val;
    const cleaned = String(val).replace(/[^0-9.\-]/g, '');
    return parseFloat(cleaned) || 0;
}


/* ─────────────────────────────────────────────────────────────────────
   GRAND SUBMISSION SUMMARY
   ───────────────────────────────────────────────────────────────────── */
function computeGrandSummaryCard(data) {
    const hospitalSet = new Set();
    const patientSet = new Set();
    let adjAmountTotal = 0;
    let originalAmountTotal = 0;
    let allocatedAmountTotal = 0;

    data.forEach(claim => {
        const hospKey = claim.hospitalId || (claim.hospital || '').trim().toLowerCase();
        if (hospKey) hospitalSet.add(hospKey);
        const patKey = (claim.patientName || '').trim().toLowerCase();
        if (patKey) patientSet.add(patKey);
        adjAmountTotal += claim.adjAmount || 0;
        claim.lines.forEach(line => {
            originalAmountTotal += line.originalAmount || 0;
            allocatedAmountTotal += line.adjustmentAmount || 0;
        });
    });

    return {
        hospitals: hospitalSet.size,
        patients: patientSet.size,
        claims: data.length,
        adjAmountTotal,
        originalAmountTotal,
        allocatedAmountTotal
    };
}

function renderGrandSummaryCard(data) {
    const s = computeGrandSummaryCard(data);
    const setText = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    };
    const fmt = v => (v < 0 ? '- $' : '$') + Math.abs(v).toFixed(2);

    setText('gs-hospitals', s.hospitals);
    setText('gs-patients', s.patients);
    setText('gs-claims', s.claims);
    setText('gs-adj-amount', fmt(s.adjAmountTotal));
    setText('gs-original-amount', '$' + s.originalAmountTotal.toFixed(2));
    setText('gs-allocated-amount', fmt(s.allocatedAmountTotal));
}


/* ─────────────────────────────────────────────────────────────────────
   STATE
   ───────────────────────────────────────────────────────────────────── */
let allData = [];
let DOCTOR_HOSPITAL_MAP = new Map();
let ALL_HOSPITAL_ITEMS = [];
let filtered = [];
let currentPage = 1;
let perPage = 10;
let sortKey = 'claimId';
let sortDir = 'asc';
let searchQ = '';
let ADJ_TYPES = [];


/* ─────────────────────────────────────────────────────────────────────
   ADJUSTMENT TYPES
   ───────────────────────────────────────────────────────────────────── */
function resolveAdjType(raw) {
    const values = normalizeToStringArray(raw);
    if (!values.length) return { name: '—', badge: 'badge-other' };

    const resolvedNames = values.map(v => {
        const upper = v.toUpperCase();
        const asNum = parseInt(v, 10);
        if (!isNaN(asNum) && String(asNum) === v) {
            const byCode = ADJ_TYPES.find(t => t.code === asNum);
            if (byCode) return byCode.name;
        }
        const exact = ADJ_TYPES.find(t => t.name === upper);
        if (exact) return exact.name;
        const partial = ADJ_TYPES.find(t => upper.includes(t.name) || t.name.includes(upper));
        if (partial) return partial.name;
        return upper;
    });

    const uniqueNames = [...new Set(resolvedNames)];
    const firstMatch = ADJ_TYPES.find(t => t.name === uniqueNames[0]);
    return { name: uniqueNames.join(', '), badge: firstMatch ? firstMatch.badge : 'badge-other' };
}

function normalizeToStringArray(raw) {
    if (raw == null || raw === '') return [];
    if (Array.isArray(raw)) return raw.flatMap(normalizeToStringArray);
    if (typeof raw === 'object') {
        const val = raw.display_value || raw.zc_display_value || raw.name || raw.Name || '';
        return normalizeToStringArray(val);
    }
    return String(raw).split(/[,;\n]+/).map(s => s.trim()).filter(Boolean);
}

function probe(rec, primaryKey, alternatives = []) {
    if (rec[primaryKey] != null && rec[primaryKey] !== '') return rec[primaryKey];
    for (const k of alternatives) {
        if (rec[k] != null && rec[k] !== '') return rec[k];
    }
    return null;
}

function extractSubformLines(rec) {
    const raw = rec[CLAIM_FIELDS.lines];
    return Array.isArray(raw) ? raw : [];
}


/* ─────────────────────────────────────────────────────────────────────
   ITEM NUMBER RESOLVER
   ───────────────────────────────────────────────────────────────────── */
function extractItemNumber(raw) {
    if (raw == null || raw === '') return '—';

    const isDateLike = (v) => /\d{1,2}[-/]\w{3}[-/]\d{2,4}|\d{4}-\d{2}-\d{2}/.test(v);
    const isRecordIdLike = (v) => /^\d{10,}$/.test(v);

    if (typeof raw === 'string' || typeof raw === 'number') {
        const s = String(raw).trim();
        if (!s || isDateLike(s) || isRecordIdLike(s)) return '—';
        return s;
    }

    if (typeof raw === 'object') {
        const candidates = ['Item', 'Item_Number', 'Item_Code', 'Code', 'Number', 'Name'];
        for (const f of candidates) {
            const v = raw[f];
            if (typeof v === 'string' && v.trim()) {
                const t = v.trim();
                if (!isDateLike(t) && !isRecordIdLike(t)) return t;
            }
        }
        for (const f of ['zc_display_value', 'display_value']) {
            const v = raw[f];
            if (typeof v === 'string' && v.trim()) {
                const t = v.trim();
                if (!isDateLike(t) && !isRecordIdLike(t)) return t;
            }
        }
        for (const key of Object.keys(raw)) {
            if (/item/i.test(key) && !/id$/i.test(key)) {
                const v = raw[key];
                if (v != null && (typeof v === 'string' || typeof v === 'number')) {
                    const t = String(v).trim();
                    if (t && !isDateLike(t) && !isRecordIdLike(t)) return t;
                }
            }
        }
        const excludeKeys = /^(id|added_time|modified_time|added_user|modified_user|zc_display_value|display_value)$/i;
        for (const key of Object.keys(raw)) {
            if (excludeKeys.test(key)) continue;
            const v = raw[key];
            if (typeof v === 'string') {
                const t = v.trim();
                if (t && t.length <= 20 && !isDateLike(t) && !isRecordIdLike(t)) return t;
            }
        }
    }
    return '—';
}

function resolveItemNumber(raw) {
    if (raw == null || raw === '') return '—';

    if (typeof raw === 'object') {
        const id = extractLookupId(raw);
        if (id && ITEM_ID_TO_NUMBER_MAP.has(id)) return ITEM_ID_TO_NUMBER_MAP.get(id);
        const textFallback = extractItemNumber(raw);
        if (textFallback !== '—') return textFallback;
        return '—';
    }

    const s = String(raw).trim();
    if (/^\d{10,}$/.test(s)) {
        return ITEM_ID_TO_NUMBER_MAP.has(s) ? ITEM_ID_TO_NUMBER_MAP.get(s) : '—';
    }
    return extractItemNumber(raw);
}


/* ─────────────────────────────────────────────────────────────────────
   ROW BUILDERS
   ───────────────────────────────────────────────────────────────────── */
function buildLineRow(lineRec) {
    const itemNoRaw = probe(lineRec, LINE_FIELDS.itemNumber,
        ['Item', 'Items', 'Item_Name', 'Item_Details', 'Line_Item_Number', 'SNO', 'S_No', 'Sl_No']);
    const origRaw = probe(lineRec, LINE_FIELDS.originalAmount, ['Charged_Amount']);
    const adjRaw = probe(lineRec, LINE_FIELDS.adjustmentAmount, ['Adj_Amount']);

    const hasStructuredData = [itemNoRaw, origRaw, adjRaw].some(v => v != null && v !== '');

    if (hasStructuredData) {
        return {
            itemNumber: resolveItemNumber(itemNoRaw),
            originalAmount: parseAmount(origRaw),
            adjustmentAmount: parseAmount(adjRaw),
            originalAmountRaw: (origRaw != null && origRaw !== '') ? String(origRaw) : '',
            adjustmentAmountRaw: (adjRaw != null && adjRaw !== '') ? String(adjRaw) : ''
        };
    }

    const dv = (lineRec && (lineRec.display_value || lineRec.zc_display_value)) || '';
    if (dv) {
        const itemMatch = dv.match(/^(\S+)/);
        const numberMatches = dv.match(/-?[\d,]+\.\d{2}/g) || [];
        const original = numberMatches.length > 1 ? numberMatches[1] : '';
        const adjustment = numberMatches.length > 2 ? numberMatches[numberMatches.length - 1] : '';
        const rawItemToken = itemMatch ? itemMatch[1] : '';
        const looksLikeDate = /\d{1,2}[-/]\w{3}[-/]\d{2,4}|\d{4}-\d{2}-\d{2}/.test(rawItemToken);

        return {
            itemNumber: looksLikeDate ? '—' : resolveItemNumber(rawItemToken),
            originalAmount: parseAmount(original),
            adjustmentAmount: parseAmount(adjustment),
            originalAmountRaw: original,
            adjustmentAmountRaw: adjustment
        };
    }

    return { itemNumber: '—', originalAmount: 0, adjustmentAmount: 0, originalAmountRaw: '', adjustmentAmountRaw: '' };
}

function buildClaimsData(invoices) {
    return (invoices || []).map(rec => {
        const hospitalVal = probe(rec, CLAIM_FIELDS.hospitalLookup, ['Hospital_Name', 'Hospital_Details', 'Hospitals']);
        const doctorVal = probe(rec, CLAIM_FIELDS.doctorLookup, ['Doctor_Name', 'Doctor_Details', 'Doctors']);
        const patientRaw = probe(rec, 'Patient', ['Patient_Name', 'patient_name', 'PatientName', 'Name']);
        const patientName = extractPatientName(patientRaw);
        const typeRaw = probe(rec, CLAIM_FIELDS.adjustmentType, ['Adj_Type', 'AdjustmentType', 'Type', 'Adjustment_Types']);
        const dateRaw = probe(rec, CLAIM_FIELDS.adjustmentDate, ['Date', 'Adj_Date', 'AdjustmentDate']);
        const claimIdRaw = probe(rec, CLAIM_FIELDS.claimId, ['ClaimID', 'Claim_Number', 'Claim_No']);
        const notesRaw = probe(rec, CLAIM_FIELDS.notes, ['Note', 'Comments', 'Remarks']);
        const staffVal = probe(rec, CLAIM_FIELDS.staff, ['Staff_Name', 'Staff']);
        const adjAmountRaw = probe(rec, CLAIM_FIELDS.adjustmentAmount, ['Adj_Amount', 'Allocated_Amount', 'Total_Adjustment_Amount']);

        const adjMeta = resolveAdjType(typeRaw);
        const rawLines = extractSubformLines(rec);
        const lines = rawLines.length
            ? rawLines.map(buildLineRow)
            : [{ itemNumber: '—', originalAmount: 0, adjustmentAmount: 0, originalAmountRaw: '', adjustmentAmountRaw: '' }];

        return {
            id: rec.ID || '',
            claimId: claimIdRaw || rec.ID || '',
            hospitalId: extractLookupId(hospitalVal),
            hospital: extractLookupName(hospitalVal, ['Hospital_Name', 'Name']),
            doctorId: extractLookupId(doctorVal),
            doctor: extractLookupName(doctorVal, ['Doctor_Name', 'Name']),
            patientName: patientName === '—' ? '' : patientName,
            type: adjMeta.name,
            typeBadge: adjMeta.badge,
            date: parseZohoDate(dateRaw),
            adjAmount: parseAmount(adjAmountRaw),
            notes: typeof notesRaw === 'string' ? notesRaw : (notesRaw ? String(notesRaw) : ''),
            staff: typeof staffVal === 'string' ? staffVal : extractLookupName(staffVal, ['Staff_Name', 'Name']),
            lines: lines
        };
    });
}

function buildAdjOptions() {
    const items = ADJ_TYPES.map(t => ({ value: t.name, label: t.name }));
    populateSSDropdown('ss-adj-type', items, 'All Types');
}


/* ─────────────────────────────────────────────────────────────────────
   FILTERS
   ───────────────────────────────────────────────────────────────────── */
function applyFilters() {
    const val = id => { const el = document.getElementById(id); return el ? el.value : ''; };

    const hosp = val('f-location');
    const doc = val('f-doctor');
    const adjType = val('f-adj-type');
    const staff = val('f-staff');
    const patient = val('f-patient');
    const fromRaw = val('filter-from');
    const toRaw = val('filter-to');
    const from = fromRaw ? (parseZohoDate(fromRaw) || fromRaw) : '';
    const to = toRaw ? (parseZohoDate(toRaw) || toRaw) : '';

    filtered = allData.filter(r => {
        if (hosp && r.hospitalId !== hosp) return false;
        if (doc && r.doctorId !== doc) return false;
        if (adjType && r.type !== adjType) return false;
        if (staff && r.staff !== staff) return false;
        if (patient && r.patientName !== patient) return false;
        if (from && r.date && r.date < from) return false;
        if (to && r.date && r.date > to) return false;
        return true;
    });

    searchQ = '';
    const srchEl = document.getElementById('table-search');
    if (srchEl) srchEl.value = '';
    currentPage = 1;
    renderTable();
}

function resetFilters() {
    selectSSOption('ss-location', '', 'All Locations');
    selectSSOption('ss-adj-type', '', 'All Types');
    selectSSOption('ss-staff', '', 'All Staff');

    ['f-patient', 'filter-from', 'filter-to', 'table-search'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    filtered = [...allData];
    searchQ = '';
    currentPage = 1;
    renderTable();
}


/* ─────────────────────────────────────────────────────────────────────
   SEARCH / SORT
   ───────────────────────────────────────────────────────────────────── */
function searchTable(q) { searchQ = q.toLowerCase(); currentPage = 1; renderTable(); }

function sortTable(key) {
    if (sortKey === key) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    else { sortKey = key; sortDir = 'asc'; }
    document.querySelectorAll('thead th').forEach(th => th.classList.remove('sort-asc', 'sort-desc'));
    const idx = {
        claimId: 0, date: 1, hospital: 2, doctor: 3, staff: 4, patientName: 5,
        type: 6, adjAmount: 7, notes: 8, itemNumber: 9, originalAmount: 10, adjustmentAmount: 11
    };
    const th = document.querySelectorAll('thead th')[idx[key]];
    if (th) th.classList.add(sortDir === 'asc' ? 'sort-asc' : 'sort-desc');
    currentPage = 1;
    renderTable();
}


/* ─────────────────────────────────────────────────────────────────────
   RENDER
   ───────────────────────────────────────────────────────────────────── */
function getDisplayData() {
    let d = [...filtered];

    if (searchQ) {
        d = d.filter(r => {
            const claimMatch = [r.claimId, r.hospital, r.patientName, r.type, r.doctor, r.date, r.staff, r.notes, r.adjAmount]
                .some(v => String(v).toLowerCase().includes(searchQ));
            const lineMatch = r.lines.some(l =>
                [l.itemNumber, l.originalAmount, l.adjustmentAmount]
                    .some(v => String(v).toLowerCase().includes(searchQ))
            );
            return claimMatch || lineMatch;
        });
    }

    const lineKeys = ['itemNumber', 'originalAmount', 'adjustmentAmount'];
    d.sort((a, b) => {
        let va, vb;
        if (lineKeys.includes(sortKey)) {
            va = a.lines[0] ? a.lines[0][sortKey] : 0;
            vb = b.lines[0] ? b.lines[0][sortKey] : 0;
        } else {
            va = a[sortKey]; vb = b[sortKey];
        }
        if (typeof va === 'string') { va = va.toLowerCase(); vb = String(vb).toLowerCase(); }
        return va < vb ? (sortDir === 'asc' ? -1 : 1)
            : va > vb ? (sortDir === 'asc' ? 1 : -1) : 0;
    });
    return d;
}

function renderTable() {
    const data = getDisplayData();
    renderGrandSummaryCard(data);
    const total = data.length;
    const start = (currentPage - 1) * perPage;
    const end = Math.min(start + perPage, total);
    const page = data.slice(start, end);
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';

    if (!page.length) {
        document.getElementById('no-results').style.display = 'block';
    } else {
        document.getElementById('no-results').style.display = 'none';

        page.forEach(claim => {
            const typeCellHtml = claim.type && claim.type !== '—'
                ? `<span class="type-badge ${claim.typeBadge}">${claim.type}</span>`
                : `<span style="color:#aaa;font-size:12px;">—</span>`;
            const adjDateStr = formatDateDisplay(claim.date);
            const adjAmountCls = claim.adjAmount < 0 ? 'amount-neg' : 'amount-pos';
            const adjAmountStr = (claim.adjAmount < 0 ? '- $' : '$') + Math.abs(claim.adjAmount).toFixed(2);

            claim.lines.forEach((line, idx) => {
                const tr = document.createElement('tr');
                tr.classList.add('claim-line-row');
                if (idx === 0) tr.classList.add('claim-group-start');
                if (idx > 0) tr.classList.add('claim-group-continued');

                const first = idx === 0;
                const origStr = line.originalAmountRaw !== '' ? line.originalAmountRaw : '—';
                const allocCls = line.adjustmentAmount < 0 ? 'amount-neg' : 'amount-pos';
                const allocStr = line.adjustmentAmountRaw !== '' ? line.adjustmentAmountRaw : '—';

                tr.innerHTML = `
                    <td class="claim-repeat-cell">${first ? claim.claimId : ''}</td>
                    <td class="claim-repeat-cell">${first ? adjDateStr : ''}</td>
                    <td class="claim-repeat-cell">${first ? (claim.hospital || '—') : ''}</td>
                    <td class="claim-repeat-cell">${first ? (claim.doctor || '—') : ''}</td>
                    <td class="claim-repeat-cell">${first ? (claim.staff || '—') : ''}</td>
                    <td class="claim-repeat-cell">${first ? (claim.patientName || '—') : ''}</td>
                    <td class="claim-repeat-cell">${first ? typeCellHtml : ''}</td>
                    <td class="claim-repeat-cell ${first ? adjAmountCls : ''}">${first ? adjAmountStr : ''}</td>
                    <td class="claim-repeat-cell">${first ? (claim.notes || '—') : ''}</td>
                    <td style="text-align:center;">${line.itemNumber}</td>
                    <td class="amount-pos">${origStr}</td>
                    <td class="${allocCls}">${allocStr}</td>
                `;
                tbody.appendChild(tr);
            });
        });
    }

    renderPagination(total);
    updateBottomScrollWidth();
}

function renderPagination(total) {
    const pages = Math.ceil(total / perPage) || 1;
    const pg = document.getElementById('pagination');
    pg.innerHTML = '';

    const mkBtn = (lbl, p2, disabled = false, active = false) => {
        const b = document.createElement('button');
        b.className = 'page-btn' + (active ? ' active' : '');
        b.textContent = lbl;
        b.disabled = disabled;
        b.onclick = () => { currentPage = p2; renderTable(); };
        return b;
    };
    const dots = () => {
        const sp = document.createElement('span');
        sp.style.cssText = 'padding:0 3px;color:#aaa;font-size:11px;';
        sp.textContent = '…';
        return sp;
    };

    pg.appendChild(mkBtn('«', 1, currentPage === 1));
    pg.appendChild(mkBtn('‹', currentPage - 1, currentPage === 1));

    let s = Math.max(1, currentPage - 2), e = Math.min(pages, s + 4);
    if (e - s < 4) s = Math.max(1, e - 4);
    if (s > 1) {
        pg.appendChild(mkBtn('1', 1));
        if (s > 2) pg.appendChild(dots());
    }
    for (let i = s; i <= e; i++) pg.appendChild(mkBtn(i, i, false, i === currentPage));
    if (e < pages) {
        if (e < pages - 1) pg.appendChild(dots());
        pg.appendChild(mkBtn(pages, pages));
    }
    pg.appendChild(mkBtn('›', currentPage + 1, currentPage === pages));
    pg.appendChild(mkBtn('»', pages, currentPage === pages));
}

function changePerPage(v) { perPage = parseInt(v, 10); currentPage = 1; renderTable(); }


/* ─────────────────────────────────────────────────────────────────────
   EXPORT HELPERS (mobile / iPhone)
   ───────────────────────────────────────────────────────────────────── */
let CURRENT_ACTIVE_BLOB_URL = null;
let CURRENT_EXPORT_DATA = null;

const XLSX_MIME = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

function isMobileDevice() {
    const ua = navigator.userAgent || navigator.vendor || window.opera || "";
    const isTouch = ("ontouchstart" in window) || (navigator.maxTouchPoints > 0);
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|CriOS/i.test(ua);
    return Boolean(isMobileUA || (isTouch && window.innerWidth <= 1024));
}

function isIOS() {
    const ua = navigator.userAgent || "";
    return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

function formatBytes(bytes, decimals = 1) {
    if (!bytes) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i];
}

function blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

function blobToArrayBuffer(blob) {
    if (blob && typeof blob.arrayBuffer === 'function') return blob.arrayBuffer();
    return new Promise((resolve, reject) => {
        const r = new FileReader();
        r.onload = () => resolve(r.result);
        r.onerror = reject;
        r.readAsArrayBuffer(blob);
    });
}

function workbookToBlob(workbook) {
    const arrayBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    return new Blob([arrayBuffer], { type: XLSX_MIME });
}

function canShareFile(file) {
    try {
        return Boolean(navigator.share && navigator.canShare && navigator.canShare({ files: [file] }));
    } catch (e) {
        return false;
    }
}

function triggerBrowserDownload(blob, filename) {
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = blobUrl;
    a.download = filename;
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        try {
            document.body.removeChild(a);
            URL.revokeObjectURL(blobUrl);
        } catch (e) {}
    }, 60000);
}

function openFileInNewTab(exportData) {
    const win = window.open(exportData.blobUrl, '_blank');
    if (!win) showToast('Pop-up blocked – use "Save to Files / Share" instead');
}

async function renderPdfPreview(exportData, container) {
    container.classList.add('has-content');
    container.innerHTML = '<div class="me-preview-loading">Loading preview…</div>';

    if (!window.pdfjsLib) {
        container.innerHTML = '<iframe class="me-preview-frame" src="' + exportData.blobUrl + '"></iframe>';
        return;
    }

    try {
        const buf = await blobToArrayBuffer(exportData.blob);
        const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;
        container.innerHTML = '';

        const targetWidth = Math.max((container.clientWidth || 320) - 20, 260);
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const base = page.getViewport({ scale: 1 });
            const vp = page.getViewport({ scale: (targetWidth / base.width) * dpr });

            const canvas = document.createElement('canvas');
            canvas.className = 'me-preview-page';
            canvas.width = Math.floor(vp.width);
            canvas.height = Math.floor(vp.height);
            container.appendChild(canvas);

            await page.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;
        }
    } catch (err) {
        console.warn('PDF preview failed:', err);
        container.innerHTML = '<div class="me-preview-loading">Preview not available – use the buttons below to open or save the file.</div>';
    }
}

async function renderExcelPreview(exportData, container) {
    container.classList.add('has-content');
    container.innerHTML = '<div class="me-preview-loading">Loading preview…</div>';
    try {
        const buf = await blobToArrayBuffer(exportData.blob);
        const wb = XLSX.read(new Uint8Array(buf), { type: 'array' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const html = XLSX.utils.sheet_to_html(ws, { header: '', footer: '' });
        container.innerHTML = '<div class="me-xls-wrap">' + html + '</div>';
    } catch (err) {
        console.warn('Excel preview failed:', err);
        container.innerHTML = '<div class="me-preview-loading">Preview not available – use the buttons below to open or save the file.</div>';
    }
}

function showMobileExportModal(exportData) {
    const modal = document.getElementById('export-modal');
    if (!modal) return;

    const ios = isIOS();

    const iconEl = document.getElementById('modal-file-icon');
    if (iconEl) {
        iconEl.className = 'export-option-icon ' + (exportData.type === 'pdf' ? 'pdf-icon' : 'excel-icon');
        iconEl.textContent = exportData.type === 'pdf' ? 'PDF' : 'XLS';
    }

    const nameEl = document.getElementById('modal-file-name');
    if (nameEl) nameEl.textContent = exportData.filename;

    const sizeEl = document.getElementById('modal-file-size');
    if (sizeEl) sizeEl.textContent = formatBytes(exportData.size);

    const subtitleEl = document.getElementById('modal-subtitle');
    if (subtitleEl) {
        subtitleEl.textContent = ios
            ? 'Preview below, then tap Save to Files'
            : 'Preview below, then download to your device';
    }

    let fileObj = exportData.fileObj;
    if (!fileObj) {
        try {
            fileObj = new File([exportData.blob], exportData.filename, {
                type: exportData.mimeType,
                lastModified: Date.now()
            });
        } catch (e) { fileObj = null; }
    }

    const shareBtn = document.getElementById('modal-share-btn');
    if (shareBtn) {
        shareBtn.style.display = (fileObj && canShareFile(fileObj)) ? '' : 'none';
        shareBtn.onclick = async (e) => {
            e.preventDefault();
            try {
                await navigator.share({ files: [fileObj], title: exportData.filename });
                showToast('Saved successfully');
            } catch (err) {
                if (err && err.name === 'AbortError') return;
                console.warn('Share failed, opening file instead:', err);
                openFileInNewTab(exportData);
            }
        };
    }

    const dlBtn = document.getElementById('modal-download-btn');
    const dlTitle = document.getElementById('modal-download-title');
    const dlSub = document.getElementById('modal-download-subtext');
    if (dlTitle) dlTitle.textContent = ios ? 'Open Full Screen' : (exportData.type === 'pdf' ? 'Download PDF file' : 'Download Excel file');
    if (dlSub) dlSub.textContent = ios ? 'Then tap Share ▸ Save to Files' : 'Save report to this device';
    if (dlBtn) {
        dlBtn.onclick = (e) => {
            e.preventDefault();
            if (ios) {
                openFileInNewTab(exportData);
                return;
            }
            triggerBrowserDownload(exportData.blob, exportData.filename);
            showToast('Downloading ' + exportData.filename);
            setTimeout(closeMobileExportModal, 1000);
        };
    }

    const previewEl = document.getElementById('modal-preview');
    if (previewEl) {
        previewEl.innerHTML = '';
        previewEl.classList.remove('has-content');
    }
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');

    if (previewEl) {
        setTimeout(() => {
            if (exportData.type === 'pdf') renderPdfPreview(exportData, previewEl);
            else renderExcelPreview(exportData, previewEl);
        }, 320);
    }
}

function closeMobileExportModal() {
    const modal = document.getElementById('export-modal');
    if (modal) {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    }
    const previewEl = document.getElementById('modal-preview');
    if (previewEl) {
        previewEl.innerHTML = '';
        previewEl.classList.remove('has-content');
    }
}

function createExportData(blob, filename, mimeType, type) {
    if (CURRENT_ACTIVE_BLOB_URL) {
        try { URL.revokeObjectURL(CURRENT_ACTIVE_BLOB_URL); } catch (e) {}
        CURRENT_ACTIVE_BLOB_URL = null;
    }

    const blobUrl = URL.createObjectURL(blob);
    CURRENT_ACTIVE_BLOB_URL = blobUrl;

    let fileObj = null;
    try {
        fileObj = new File([blob], filename, { type: mimeType, lastModified: Date.now() });
    } catch (e) {}

    CURRENT_EXPORT_DATA = {
        blob, blobUrl, fileObj, filename, mimeType, type,
        size: blob.size,
        date: new Date()
    };
    return CURRENT_EXPORT_DATA;
}

/* ─────────────────────────────────────────────────────────────────────
   CREATOR FILE UPLOAD (used by the iPhone PDF + Excel flow)
   ───────────────────────────────────────────────────────────────────── */
const ZOHO_FILE_EXPORT = {
    appName: "claims-management",
    reportName: "Doctors_Claim_Report"
};

async function uploadExportFile(recordId, fieldName, file, reportName) {
    reportName = reportName || ZOHO_FILE_EXPORT.reportName;
    let resp;
    if (ZOHO.CREATOR.FILE && typeof ZOHO.CREATOR.FILE.uploadFile === "function") {
        resp = await ZOHO.CREATOR.FILE.uploadFile({
            app_name: ZOHO_FILE_EXPORT.appName,
            report_name: reportName,
            id: recordId,
            field_name: fieldName,
            file: file
        });
    } else if (ZOHO.CREATOR.DATA && typeof ZOHO.CREATOR.DATA.uploadFile === "function") {
        resp = await ZOHO.CREATOR.DATA.uploadFile({
            app_name: ZOHO_FILE_EXPORT.appName,
            report_name: reportName,
            id: recordId,
            field_name: fieldName,
            file: file
        });
    } else if (ZOHO.CREATOR.API && typeof ZOHO.CREATOR.API.uploadFile === "function") {
        resp = await ZOHO.CREATOR.API.uploadFile({
            appName: ZOHO_FILE_EXPORT.appName,
            reportName: reportName,
            id: recordId,
            fieldName: fieldName,
            file: file
        });
    } else {
        throw new Error("No known uploadFile method found on ZOHO.CREATOR.");
    }
    if (resp && resp.code && resp.code !== 3000) {
        throw new Error("Upload to " + fieldName + " failed: " + JSON.stringify(resp));
    }
    return resp;
}

async function handleFileExport({ blob, filename, mimeType, type }) {
    createExportData(blob, filename, mimeType, type);

    if (isMobileDevice()) {
        showMobileExportModal(CURRENT_EXPORT_DATA);
    } else {
        try {
            triggerBrowserDownload(blob, filename);
            showToast(type === "pdf" ? "✓ PDF exported successfully" : "✓ Excel exported successfully");
        } catch (e) {
            showMobileExportModal(CURRENT_EXPORT_DATA);
        }
    }
}

function initMobileExportBindings() {
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalDoneBtn = document.getElementById("modal-done-btn");
    const exportModal = document.getElementById("export-modal");

    if (modalCloseBtn) modalCloseBtn.onclick = closeMobileExportModal;
    if (modalDoneBtn) modalDoneBtn.onclick = closeMobileExportModal;
    if (exportModal) {
        exportModal.onclick = (e) => {
            if (e.target === exportModal) closeMobileExportModal();
        };
    }
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMobileExportModal();
    });
}


/* ─────────────────────────────────────────────────────────────────────
   REPORT META (doctor / hospital / period / generated on)
   ───────────────────────────────────────────────────────────────────── */
function getReportMeta() {
    const docDisplayEl = document.getElementById('f-doctor-display');
    const hospLabelEl = document.querySelector('#ss-location .ss-label');
    const fromEl = document.getElementById('filter-from');
    const toEl = document.getElementById('filter-to');

    const doctorName = (docDisplayEl && docDisplayEl.value.trim()) || 'All Doctors';
    const hospitalName = (hospLabelEl && hospLabelEl.textContent.trim()) || 'All Locations';

    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];

    const fmtShort = (iso) => {
        const m = String(iso || '').match(/^(\d{4})-(\d{2})-(\d{2})/);
        return m ? `${parseInt(m[3], 10)} ${MONTHS[parseInt(m[2], 10) - 1]}` : '';
    };
    const fmtLong = (iso) => {
        const m = String(iso || '').match(/^(\d{4})-(\d{2})-(\d{2})/);
        return m ? `${parseInt(m[3], 10)} ${MONTHS[parseInt(m[2], 10) - 1]} ${m[1]}` : '';
    };

    const fromStr = fromEl && fromEl.value ? fmtShort(fromEl.value) : '';
    const toStr = toEl && toEl.value ? fmtLong(toEl.value) : '';

    let period;
    if (fromStr && toStr) period = `${fromStr} – ${toStr}`;
    else if (fromStr) period = `From ${fmtLong(fromEl.value)}`;
    else if (toStr) period = `Up to ${toStr}`;
    else period = 'All Dates';

    const now = new Date();
    let hh = now.getHours();
    const ampm = hh >= 12 ? 'PM' : 'AM';
    hh = hh % 12 || 12;
    const mm = String(now.getMinutes()).padStart(2, '0');
    const generatedOn = `${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()} at ${hh}:${mm} ${ampm}`;

    return { doctorName, hospitalName, period, generatedOn };
}


/* ─────────────────────────────────────────────────────────────────────
   EXPORT EXCEL
   iPhone: build .xlsx -> upload to Creator -> "Download Excel file" button
   Others: normal download / preview modal
   ───────────────────────────────────────────────────────────────────── */
function exportExcel() {
    if (typeof XLSX === 'undefined') { showToast('Excel library did not load. Check internet connection.'); return; }
    if (!getDisplayData().length) { showToast('No records to export.'); return; }

    // iPhone: Safari cannot save a blob/writeFile .xlsx inside the widget
    // (it shows raw "PK..." text), so go through Creator like the PDF.
    if (isIOS()) {
        try {
            const { wb, filename } = buildExcelExport();
            const blob = workbookToBlob(wb);
            iosFileReady(blob, filename, XLSX_MIME, IOS_EXCEL_TARGET, 'Excel');
        } catch (e) {
            console.error(e);
            showToast('Export failed: ' + e.message);
        }
        return;
    }

    showLoading('Generating Excel');
    setTimeout(async () => {
        try {
            const { wb, filename } = buildExcelExport();
            const blob = workbookToBlob(wb);
            hideLoading();
            await handleFileExport({
                blob,
                filename,
                mimeType: XLSX_MIME,
                type: 'excel'
            });
        } catch (e) {
            hideLoading();
            showToast('Export failed: ' + e.message);
        }
    }, 80);
}

// Builds the report workbook and returns { wb, filename }.
function buildExcelExport() {
    const data = getDisplayData();
    const meta = getReportMeta();

    const headers = [
        'Claim ID', 'Claim Date', 'Hospital', 'Doctor', 'Staff', 'Patient',
        'Adjustment Type', 'Adjustment Amount', 'Notes',
        'Item Number', 'Original Amount', 'Allocated Amount'
    ];
    const colCount = headers.length;

    const rows = [];
    data.forEach(r => {
        r.lines.forEach(line => {
            rows.push([
                r.claimId, formatDateDisplay(r.date), r.hospital || '—', r.doctor || '—',
                r.staff || '—', r.patientName || '—', r.type || '—', r.adjAmount,
                r.notes || '—', line.itemNumber, line.originalAmount, line.adjustmentAmount
            ]);
        });
    });

    const s = computeGrandSummaryCard(data);
    const fmt = v => (v < 0 ? '- $' : '$') + Math.abs(v).toFixed(2);

    const aoa = [];
    aoa.push(['ADJUSTMENT REPORT', ...Array(colCount - 1).fill('')]);
    aoa.push(Array(colCount).fill(''));
    aoa.push(['DOCTOR', '', '', 'HOSPITAL', '', '', 'REPORT PERIOD', '', '', 'GENERATED ON', '', '']);
    aoa.push([meta.doctorName, '', '', meta.hospitalName, '', '', meta.period, '', '', meta.generatedOn, '', '']);
    aoa.push(Array(colCount).fill(''));
    aoa.push(headers);
    rows.forEach(r => aoa.push(r));

    const dataStartRow = 6;
    const gsTitleRow = dataStartRow + rows.length + 1;
    const gsLabelsRow = gsTitleRow + 1;
    const gsValuesRow = gsLabelsRow + 1;

    aoa.push(Array(colCount).fill(''));
    aoa.push(['GRAND SUBMISSION SUMMARY', ...Array(colCount - 1).fill('')]);
    aoa.push(['HOSPITALS', '', 'PATIENTS', '', 'CLAIMS', '', 'TOTAL ORIGINAL AMOUNT', '', 'TOTAL ALLOCATED AMOUNT', '', 'TOTAL ADJUSTMENT AMOUNT', '']);
    aoa.push([
        s.hospitals, '', s.patients, '', s.claims, '',
        '$' + s.originalAmountTotal.toFixed(2), '',
        fmt(s.allocatedAmountTotal), '',
        fmt(s.adjAmountTotal), ''
    ]);

    const ws = XLSX.utils.aoa_to_sheet(aoa);

    ws['!cols'] = [
        { wch: 14 }, { wch: 14 }, { wch: 26 }, { wch: 16 }, { wch: 16 }, { wch: 20 },
        { wch: 20 }, { wch: 18 }, { wch: 26 }, { wch: 12 }, { wch: 16 }, { wch: 16 }
    ];
    ws['!rows'] = [{ hpt: 26 }, { hpt: 6 }, { hpt: 16 }, { hpt: 20 }, { hpt: 6 }, { hpt: 22 }];

    ws['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: colCount - 1 } },
        { s: { r: 2, c: 0 }, e: { r: 2, c: 2 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 2 } },
        { s: { r: 2, c: 3 }, e: { r: 2, c: 5 } }, { s: { r: 3, c: 3 }, e: { r: 3, c: 5 } },
        { s: { r: 2, c: 6 }, e: { r: 2, c: 8 } }, { s: { r: 3, c: 6 }, e: { r: 3, c: 8 } },
        { s: { r: 2, c: 9 }, e: { r: 2, c: 11 } }, { s: { r: 3, c: 9 }, e: { r: 3, c: 11 } },
        { s: { r: gsTitleRow, c: 0 }, e: { r: gsTitleRow, c: colCount - 1 } }
    ];
    for (let c = 0; c < colCount; c += 2) {
        ws['!merges'].push({ s: { r: gsLabelsRow, c }, e: { r: gsLabelsRow, c: c + 1 } });
        ws['!merges'].push({ s: { r: gsValuesRow, c }, e: { r: gsValuesRow, c: c + 1 } });
    }

    const NAVY = 'FF15234B';
    const LABEL_COLOR = 'FF3A5A8A';
    const VALUE_COLOR = 'FF232830';
    const HEADER_BG = 'FF3A5A8A';
    const ZEBRA_BG = 'FFF8F9FB';
    const BORDER_LT = 'FFD2D5DC';
    const DARK_GREEN = 'FF1B5E2D';
    const CARD_BG = 'FFF8F9FB';

    const thin = (rgb) => ({ style: 'thin', color: { rgb } });
    const dataBorder = { top: thin(BORDER_LT), bottom: thin(BORDER_LT), left: thin(BORDER_LT), right: thin(BORDER_LT) };

    const titleStyle = { font: { bold: true, sz: 16, color: { rgb: NAVY } }, alignment: { horizontal: 'left', vertical: 'center' } };
    const labelStyle = { font: { bold: true, sz: 9, color: { rgb: LABEL_COLOR } }, alignment: { horizontal: 'left', vertical: 'center' } };
    const valueStyle = { font: { bold: true, sz: 11, color: { rgb: VALUE_COLOR } }, alignment: { horizontal: 'left', vertical: 'center' } };
    const headerStyle = {
        font: { bold: true, sz: 10, color: { rgb: 'FFFFFFFF' } },
        fill: { patternType: 'solid', fgColor: { rgb: HEADER_BG } },
        alignment: { horizontal: 'center', vertical: 'center', wrapText: true },
        border: { top: thin('FFB0B8C4'), bottom: thin('FFB0B8C4'), left: thin('FFB0B8C4'), right: thin('FFB0B8C4') }
    };

    const setCellStyle = (r, c, style) => {
        const addr = XLSX.utils.encode_cell({ r, c });
        if (!ws[addr]) ws[addr] = { t: 's', v: '' };
        ws[addr].s = style;
    };

    for (let c = 0; c < colCount; c++) {
        setCellStyle(0, c, titleStyle);
        setCellStyle(2, c, labelStyle);
        setCellStyle(3, c, valueStyle);
        setCellStyle(5, c, headerStyle);
    }

    const alignMap = { 1: 'center', 7: 'right', 9: 'center', 10: 'right', 11: 'right' };
    rows.forEach((row, i) => {
        const r = dataStartRow + i;
        row.forEach((val, c) => {
            const style = {
                alignment: { horizontal: alignMap[c] || 'left', vertical: 'center' },
                border: dataBorder
            };
            if (i % 2 === 1) style.fill = { patternType: 'solid', fgColor: { rgb: ZEBRA_BG } };
            setCellStyle(r, c, style);
        });
    });

    const gsTitleStyle = {
        font: { bold: true, sz: 13, color: { rgb: NAVY } },
        alignment: { horizontal: 'center', vertical: 'center' },
        fill: { patternType: 'solid', fgColor: { rgb: CARD_BG } },
        border: { top: { style: 'medium', color: { rgb: NAVY } }, left: thin(BORDER_LT), right: thin(BORDER_LT) }
    };
    const gsLabelStyle = {
        font: { bold: true, sz: 8.5, color: { rgb: 'FF6E7680' } },
        alignment: { horizontal: 'center', vertical: 'center' },
        fill: { patternType: 'solid', fgColor: { rgb: CARD_BG } },
        border: { left: thin(BORDER_LT), right: thin(BORDER_LT) }
    };
    const gsValueStyle = {
        font: { bold: true, sz: 14, color: { rgb: DARK_GREEN } },
        alignment: { horizontal: 'center', vertical: 'center' },
        fill: { patternType: 'solid', fgColor: { rgb: CARD_BG } },
        border: { left: thin(BORDER_LT), right: thin(BORDER_LT), bottom: { style: 'medium', color: { rgb: NAVY } } }
    };
    for (let c = 0; c < colCount; c++) {
        setCellStyle(gsTitleRow, c, gsTitleStyle);
        setCellStyle(gsLabelsRow, c, gsLabelStyle);
        setCellStyle(gsValuesRow, c, gsValueStyle);
    }

    ws['!ref'] = XLSX.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: gsValuesRow, c: colCount - 1 } });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Adjustment Report');
    const filename = 'Adjustment_Report_' + new Date().toISOString().split('T')[0] + '.xlsx';
    return { wb, filename };
}


/* ─────────────────────────────────────────────────────────────────────
   PDF ICON HELPERS
   ───────────────────────────────────────────────────────────────────── */
function _iconColor(doc, color, fillToo) {
    doc.setDrawColor(color[0], color[1], color[2]);
    if (fillToo) doc.setFillColor(color[0], color[1], color[2]);
}

function iconDoctor(doc, cx, cy, s, color) {
    _iconColor(doc, color);
    doc.setLineWidth(0.28);
    doc.circle(cx, cy - s * 0.20, s * 0.16, 'S');
    doc.ellipse(cx, cy + s * 0.18, s * 0.26, s * 0.16, 'S');
}

function iconHospital(doc, cx, cy, s, color) {
    _iconColor(doc, color);
    doc.setLineWidth(0.28);
    const w = s * 0.62, h = s * 0.72;
    doc.roundedRect(cx - w / 2, cy - h / 2, w, h, 0.4, 0.4, 'S');
    doc.setLineWidth(0.22);
    doc.line(cx, cy - h * 0.22, cx, cy + h * 0.02);
    doc.line(cx - w * 0.16, cy - h * 0.10, cx + w * 0.16, cy - h * 0.10);
    doc.rect(cx - w * 0.30, cy + h * 0.14, w * 0.22, h * 0.18, 'S');
    doc.rect(cx + w * 0.08, cy + h * 0.14, w * 0.22, h * 0.18, 'S');
}

function iconCalendar(doc, cx, cy, s, color) {
    _iconColor(doc, color);
    doc.setLineWidth(0.28);
    const w = s * 0.66, h = s * 0.58;
    doc.roundedRect(cx - w / 2, cy - h / 2, w, h, 0.5, 0.5, 'S');
    doc.line(cx - w / 2, cy - h / 2 + h * 0.32, cx + w / 2, cy - h / 2 + h * 0.32);
    doc.setLineWidth(0.4);
    doc.line(cx - w * 0.22, cy - h / 2 - 0.5, cx - w * 0.22, cy - h / 2 + 0.8);
    doc.line(cx + w * 0.22, cy - h / 2 - 0.5, cx + w * 0.22, cy - h / 2 + 0.8);
}

function iconClock(doc, cx, cy, s, color) {
    _iconColor(doc, color);
    doc.setLineWidth(0.28);
    doc.circle(cx, cy, s * 0.32, 'S');
    doc.setLineWidth(0.32);
    doc.line(cx, cy, cx, cy - s * 0.18);
    doc.line(cx, cy, cx + s * 0.15, cy + s * 0.03);
}

const ICON_KAPPA = 0.5523;

function iconLock(doc, cx, cy, s, color) {
    _iconColor(doc, color);
    doc.setLineWidth(s * 0.045);
    const shackleR = s * 0.16;
    const shackleCy = cy - s * 0.12;
    const bodyW = s * 0.44;
    const bodyH = s * 0.34;
    const bodyTopY = cy - s * 0.02;
    const bodyR = s * 0.06;
    doc.circle(cx, shackleCy, shackleR, 'S');
    doc.setFillColor(color[0], color[1], color[2]);
    doc.roundedRect(cx - bodyW / 2, bodyTopY, bodyW, bodyH, bodyR, bodyR, 'F');
}

function iconShield(doc, cx, cy, s, color) {
    _iconColor(doc, color);
    doc.setLineWidth(s * 0.05);
    const halfW = s * 0.32;
    const r = s * 0.10;
    const topY = cy - s * 0.44;
    const shoulderY = topY + r;
    const taperY = cy + s * 0.04;
    const botY = cy + s * 0.46;
    const k = ICON_KAPPA;

    doc.lines(
        [
            [2 * (halfW - r), 0],
            [k * r, 0, r, r - k * r, r, r],
            [0, taperY - shoulderY],
            [0, (botY - taperY) * 0.6, -halfW * 0.75, botY - taperY, -halfW, botY - taperY],
            [-halfW * 0.25, 0, -halfW, -(botY - taperY) * 0.4, -halfW, -(botY - taperY)],
            [0, -(taperY - shoulderY)],
            [0, -k * r, r - k * r, -r, r, -r]
        ],
        cx - halfW + r, topY,
        [1, 1], 'S', true
    );

    iconLock(doc, cx, cy + s * 0.02, s * 0.62, color);
}

function iconPhone(doc, cx, cy, s, color) {
    _iconColor(doc, color, true);
    doc.setLineWidth(0.28);
    doc.roundedRect(cx - s * 0.16, cy - s * 0.28, s * 0.32, s * 0.56, 0.5, 0.5, 'S');
    doc.setLineWidth(0.16);
    doc.line(cx - s * 0.08, cy + s * 0.16, cx + s * 0.08, cy + s * 0.16);
}

function iconEmail(doc, cx, cy, s, color) {
    _iconColor(doc, color);
    doc.setLineWidth(0.28);
    const w = s * 0.56, h = s * 0.4;
    doc.rect(cx - w / 2, cy - h / 2, w, h, 'S');
    doc.line(cx - w / 2, cy - h / 2, cx, cy + h * 0.08);
    doc.line(cx + w / 2, cy - h / 2, cx, cy + h * 0.08);
}

function iconGlobe(doc, cx, cy, s, color) {
    _iconColor(doc, color);
    doc.setLineWidth(0.28);
    const r = s * 0.3;
    doc.circle(cx, cy, r, 'S');
    doc.ellipse(cx, cy, r * 0.42, r, 'S');
    doc.line(cx - r, cy, cx + r, cy);
}


/* ─────────────────────────────────────────────────────────────────────
   GRAND SUMMARY CARD (PDF)
   ───────────────────────────────────────────────────────────────────── */
function drawGrandSummaryCardPDF(doc, data, mL, mR, pageW, startY) {
    const NAVY = [21, 35, 75];
    const LABEL_GRAY = [120, 128, 140];
    const CARD_BG = [237, 241, 250];
    const BORDER_LT = [212, 218, 230];

    const s = computeGrandSummaryCard(data);
    const boxX = mL;
    const boxW = pageW - mL - mR;
    const padX = 6.5;
    const boxH = 24;
    const y = startY;

    doc.setFillColor(CARD_BG[0], CARD_BG[1], CARD_BG[2]);
    doc.setDrawColor(BORDER_LT[0], BORDER_LT[1], BORDER_LT[2]);
    doc.setLineWidth(0.3);
    doc.roundedRect(boxX, y, boxW, boxH, 2.2, 2.2, 'FD');

    doc.setDrawColor(NAVY[0], NAVY[1], NAVY[2]);
    doc.setLineWidth(1.1);
    doc.line(boxX + 2.2, y + 0.1, boxX + boxW - 2.2, y + 0.1);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(NAVY[0], NAVY[1], NAVY[2]);
    doc.text('GRAND SUBMISSION SUMMARY', boxX + padX, y + 7.5);

    const fmt = v => (v < 0 ? '- $' : '$') + Math.abs(v).toFixed(2);

    const stats = [
        { label: ['HOSPITALS'], value: String(s.hospitals) },
        { label: ['PATIENTS'], value: String(s.patients) },
        { label: ['CLAIMS'], value: String(s.claims) },
        { label: ['TOTAL ORIGINAL', 'AMOUNT'], value: '$ ' + s.originalAmountTotal.toFixed(2) },
        { label: ['TOTAL ALLOCATED', 'AMOUNT'], value: fmt(s.allocatedAmountTotal) },
        { label: ['TOTAL ADJUSTMENT', 'AMOUNT'], value: fmt(s.adjAmountTotal) }
    ];

    const colW = (boxW - padX * 2) / stats.length;
    const labelY = y + 14;

    stats.forEach((st, i) => {
        const cx = boxX + padX + colW * i;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(6.4);
        doc.setTextColor(LABEL_GRAY[0], LABEL_GRAY[1], LABEL_GRAY[2]);
        st.label.forEach((ln, li) => doc.text(ln, cx, labelY + li * 2.8));
        doc.setFontSize(10.5);
        doc.setTextColor(NAVY[0], NAVY[1], NAVY[2]);
        doc.text(st.value, cx, st.label.length > 1 ? y + 20.5 : y + 18.5);
    });

    return y + boxH;
}


/* ─────────────────────────────────────────────────────────────────────
   EXPORT PDF (A4 landscape)
   iPhone: upload to Creator -> "Download PDF file" button
   Others: doc.save() straight from the tap
   ───────────────────────────────────────────────────────────────────── */
function exportPDF() {
    if (!window.jspdf || !window.jspdf.jsPDF) { showToast('PDF library did not load. Check internet connection.'); return; }
    const rows = getDisplayData();
    if (!rows.length) { showToast('No records to export.'); return; }

    const { doc, filename } = buildPdfExport(LOGO_DATA_URL);

    if (isIOS()) {
        iosPdfReady(doc.output('blob'), filename);
        return;
    }
    doc.save(filename);
}


/* ─────────────────────────────────────────────────────────────────────
   iPHONE "FILE READY" FLOW (shared by PDF and Excel)
   ───────────────────────────────────────────────────────────────────── */
const CREATOR_HOST = "https://creatorapp.zoho.com.au";
const CREATOR_OWNER = "medielves";

/* Where the iPhone files are saved.
   Excel needs a FILE UPLOAD field on the same report/record.
   Change the link names in "fields" if yours are different. */
const IOS_PDF_TARGET = {
    reportName: "Medi_Elves_Fee_Calculation_Report1",
    fields: ["Export_PDF", "Export_PDF1"]
};
const IOS_EXCEL_TARGET = {
    reportName: "Medi_Elves_Fee_Calculation_Report1",
    fields: ["Export_Excel", "Export_Excel1"]
};

function showPdfReady(html) {
    const box = document.getElementById('pdfReady');
    if (!box) return;
    if (!html) { box.innerHTML = ''; box.style.display = 'none'; return; }
    box.innerHTML = '<div class="fr-card">' + html +
        '<button type="button" class="fr-cancel" id="frCancel">Cancel</button></div>';
    box.style.display = 'block';
    const closeIt = () => showPdfReady('');
    const c = document.getElementById('frCancel');
    if (c) c.addEventListener('click', closeIt);
    box.onclick = (e) => { if (e.target === box) closeIt(); };
}

function openReportPage(e, reportName) {
    if (e) e.preventDefault();
    try {
        ZOHO.CREATOR.UTIL.navigateParentURL({
            action: "open",
            url: "#Report:" + (reportName || IOS_PDF_TARGET.reportName),
            window: "same"
        });
    } catch (err) {
        showToast('Could not open the report.');
    }
}

/* /api/v2/... (needs OAuth) -> /file/... (uses the normal Creator login session) */
function toBrowserFileUrl(path, origin) {
    const m = path.match(/\/api\/v2(?:\.1)?\/([^/]+)\/([^/]+)\/report\/([^/]+)\/(\d+)\/([^/]+)\/download(\?.*)?$/);
    if (!m) return "";
    return origin + "/file/" + m[1] + "/" + m[2] + "/" + m[3] + "/" + m[4] + "/" + m[5] + "/download" + (m[6] || "");
}

async function getIosFileUrl(recId, fieldName, reportName) {
    let resp;
    try {
        resp = await ZOHO.CREATOR.DATA.getRecordById({
            app_name: ZOHO_FILE_EXPORT.appName,
            report_name: reportName,
            id: String(recId)
        });
    } catch (e) { console.warn("getRecordById failed", e); return ""; }
    const rec = resp && resp.data;
    if (!rec) return "";
    let v = rec[fieldName];
    if (v && typeof v === "object") v = v.url || v.value || v.display_value || v.download_url || "";
    v = String(v || "").trim();
    if (!v) return "";

    let origin = "";
    try { origin = document.referrer ? new URL(document.referrer).origin : ""; } catch (e) {}
    if (!origin) origin = CREATOR_HOST;

    let path = v;
    if (/^https?:\/\//i.test(v)) {
        try { const u = new URL(v); origin = u.origin; path = u.pathname + u.search; } catch (e) { return v; }
    }
    return toBrowserFileUrl(path, origin) ||
        (/^https?:\/\//i.test(v) ? v : origin + (v.startsWith("/") ? "" : "/") + v);
}

async function getTargetRecord(target) {
    const cfg = { app_name: ZOHO_FILE_EXPORT.appName, report_name: target.reportName, max_records: 200 };
    const resp = await ZOHO.CREATOR.DATA.getRecords(cfg);
    const list = (resp && resp.data) || [];
    if (!list.length) throw new Error('No record found in ' + target.reportName + '.');
    // Same record as Service Fee Report: the one with the smallest ID
    const rec = list.slice().sort((a, b) => {
        const x = String(a.ID), y = String(b.ID);
        return x.length - y.length || (x < y ? -1 : x > y ? 1 : 0);
    })[0];
    let label = '';
    for (const k in rec) {
        const v = rec[k];
        if (typeof v === 'string' && /^MEF-\d+/i.test(v)) { label = v; break; }
    }
    return { id: String(rec.ID), label: label || String(rec.ID) };
}

async function iosFileReady(blob, filename, mimeType, target, label) {
    showPdfReady('<div class="fr-text">Preparing your ' + label + '…</div>');

    try {
        const t = await getTargetRecord(target);
        const file = new File([blob], filename, { type: mimeType, lastModified: Date.now() });

        // 1. Upload the file into the file-upload field
        let fieldName = null, lastErr = null;
        for (const name of target.fields) {
            try {
                await uploadExportFile(t.id, name, file, target.reportName);
                fieldName = name;
                break;
            } catch (e) { lastErr = e; }
        }
        if (!fieldName) throw lastErr || new Error('Upload failed.');

        // 2. Read the record back and build the file URL
        const fileUrl = await getIosFileUrl(t.id, fieldName, target.reportName);

        // 3. Show the green "Download file" button
        showPdfReady(
            '<div class="fr-text fr-hide">Your file is ready.</div>' +
            (fileUrl ? '<a class="fr-btn" href="#" id="frGetFile">Download ' + label + ' file</a>' : '') +
            '<div class="fr-help fr-hide">' + (fileUrl ? 'If it does not download, ' : '') +
            '<a href="#" id="frOpenReport">open the report</a>, open record <b>' +
            escapeHtmlSafe(t.label) + '</b> (use the search icon) and tap the <b>' + label + '</b> file.</div>'
        );
        const getBtn = document.getElementById('frGetFile');
        if (getBtn) getBtn.addEventListener('click', e => {
            e.preventDefault();
            try { ZOHO.CREATOR.UTIL.navigateParentURL({ action: "open", url: fileUrl, window: "new" }); }
            catch (err) { showToast('Could not open the file.'); }
            setTimeout(() => showPdfReady(''), 400);
        });
        const lnk = document.getElementById('frOpenReport');
        if (lnk) lnk.addEventListener('click', ev => openReportPage(ev, target.reportName));
    } catch (e) {
        console.warn('iPhone ' + label + ' upload failed:', e);
        let msg = '';
        try { msg = (e && e.message) ? e.message : JSON.stringify(e); } catch (x) { msg = String(e); }
        showPdfReady('<div class="fr-text">Could not prepare the ' + label + '.</div><div class="fr-help"><b>Error:</b> ' + escapeHtmlSafe(msg || 'unknown') + '</div>');
    }
}

function iosPdfReady(blob, filename) {
    return iosFileReady(blob, filename, 'application/pdf', IOS_PDF_TARGET, 'PDF');
}

function escapeHtmlSafe(v) {
    return String(v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}


/* ─────────────────────────────────────────────────────────────────────
   PDF BUILDER
   ───────────────────────────────────────────────────────────────────── */
function buildPdfExport(logoDataUrl) {
    const { jsPDF } = window.jspdf;

    const pageW = 297;
    const pageH = 210;
    const mL = 8;
    const mR = 8;
    const tableWidth = pageW - mL - mR;
    const COL = [20, 20, 32, 24, 20, 24, 24, 22, 35, 18, 21, 21];

    const NAVY = [21, 35, 75];
    const DARK_GREEN = [27, 94, 45];
    const MID_GREEN = [58, 140, 90];
    const GRAY_TXT = [110, 118, 128];

    const headerTopY = 8;
    const brandH = 20;
    const brandW = 90;
    const brandDrawnW = logoDataUrl ? Math.min(brandW, brandH * LOGO_ASPECT) : 40;
    const thinLineY = headerTopY + brandH + 4;
    const infoTopY = thinLineY + 4;
    const infoLabelY = infoTopY + 5.5;
    const infoValueY = infoTopY + 10.5;
    const infoBottomY = infoTopY + 13.5;
    const tableStartY = infoBottomY + 4.5;

    const footerRuleY = pageH - 20;
    const footerTitleY = footerRuleY + 4;
    const contactRuleY = pageH - 9;
    const contactY = pageH - 5;

    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

    function drawGradientLine(y, x1, x2, weight) {
        const mid = x1 + (x2 - x1) * 0.72;
        doc.setLineWidth(weight);
        doc.setDrawColor(NAVY[0], NAVY[1], NAVY[2]);
        doc.line(x1, y, mid, y);
        doc.setDrawColor(MID_GREEN[0], MID_GREEN[1], MID_GREEN[2]);
        doc.line(mid, y, x2 - 1.4, y);
        doc.setFillColor(DARK_GREEN[0], DARK_GREEN[1], DARK_GREEN[2]);
        doc.circle(x2 - 1, y, 0.6, 'F');
    }

    function drawTextBrand() {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(15);
        doc.setTextColor(DARK_GREEN[0], DARK_GREEN[1], DARK_GREEN[2]);
        doc.text('Medi Elves', mL, headerTopY + brandH * 0.5);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7);
        doc.text('Keep it simple', mL, headerTopY + brandH * 0.72);
    }

    function drawHeader(pageNumber) {
        if (pageNumber !== 1) {
            doc.setFillColor(NAVY[0], NAVY[1], NAVY[2]);
            doc.rect(mL, 6, pageW - mL - mR, 8, 'F');
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(9.5);
            doc.setTextColor(255, 255, 255);
            doc.text('ADJUSTMENT REPORT (continued)', mL + 4, 11.5);
            drawGradientLine(15.5, mL, pageW - mR, 0.7);
            return;
        }

        // New Medi Elves logo (falls back to text brand only if the image can't be drawn)
        if (logoDataUrl) {
            try {
                doc.addImage(logoDataUrl, 'PNG', mL, headerTopY, brandDrawnW, brandH);
            } catch (e) {
                drawTextBrand();
            }
        } else {
            drawTextBrand();
        }

        // Title aligned to the top-right corner (badge icon removed)
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(18);
        doc.setTextColor(NAVY[0], NAVY[1], NAVY[2]);
        doc.text('ADJUSTMENT REPORT', pageW - mR, headerTopY + 6, { align: 'right' });

        drawGradientLine(thinLineY, mL, pageW - mR, 0.6);

        const meta = getReportMeta();
        const cols = [
            { icon: iconDoctor, label: 'DOCTOR', value: meta.doctorName },
            { icon: iconHospital, label: 'HOSPITAL', value: meta.hospitalName },
            { icon: iconCalendar, label: 'REPORT PERIOD', value: meta.period },
            { icon: iconClock, label: 'GENERATED ON', value: meta.generatedOn }
        ];
        const colW = (pageW - mL - mR) / cols.length;

        cols.forEach((c, i) => {
            const colX = mL + i * colW;
            const textX = colX + 9;
            c.icon(doc, colX + 4, (infoLabelY + infoValueY) / 2, 7, DARK_GREEN);

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(6.4);
            doc.setTextColor(58, 90, 138);
            doc.text(c.label, textX, infoLabelY);

            doc.setFontSize(9);
            doc.setTextColor(35, 40, 48);
            const valLines = doc.splitTextToSize(String(c.value), colW - 12);
            doc.text(valLines[0], textX, infoValueY);

            if (i > 0) {
                doc.setDrawColor(224, 227, 232);
                doc.setLineWidth(0.25);
                doc.line(colX, infoTopY - 1, colX, infoBottomY - 2);
            }
        });
        drawGradientLine(infoBottomY, mL, pageW - mR, 1.0);
    }

    function drawFooter(pageNumber, pageCount) {
        doc.setDrawColor(210, 214, 220);
        doc.setLineWidth(0.4);
        doc.line(mL, footerRuleY, pageW - mR, footerRuleY);

        iconShield(doc, mL + 4, footerTitleY + 2.5, 7.5, DARK_GREEN);

        const textX = mL + 12;
        const textW = pageW - mR - textX - 30;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7.6);
        doc.setTextColor(NAVY[0], NAVY[1], NAVY[2]);
        doc.text(REPORT_FOOTER_LINES[0], textX, footerTitleY);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.8);
        doc.setTextColor(GRAY_TXT[0], GRAY_TXT[1], GRAY_TXT[2]);
        const wrapped = doc.splitTextToSize(REPORT_FOOTER_LINES[1], textW);
        doc.text(wrapped, textX, footerTitleY + 3.8, { lineHeightFactor: 1.3, maxWidth: textW });

        const pageBlockX = pageW - mR - 25;
        doc.setDrawColor(210, 214, 220);
        doc.setLineWidth(0.3);
        doc.line(pageBlockX, footerTitleY - 2, pageBlockX, footerTitleY + 5);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(60, 68, 80);
        doc.text('Page ' + pageNumber + ' of ' + pageCount, pageW - mR, footerTitleY + 1, { align: 'right' });

        doc.setDrawColor(224, 227, 232);
        doc.setLineWidth(0.25);
        doc.line(mL, contactRuleY, pageW - mR, contactRuleY);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(70, 90, 75);

        const contactWidth = pageW - mL - mR;
        const contactItems = [
            { icon: iconPhone, text: '1800 956 692' },
            { icon: iconEmail, text: 'admin@medielves.com.au' },
            { icon: iconGlobe, text: 'www.medielves.com.au' }
        ];
        contactItems.forEach((item, index) => {
            const colCenter = mL + contactWidth * ((index * 2 + 1) / 6);
            const tw = doc.getTextWidth(item.text);
            const tx = colCenter - tw / 2;
            item.icon(doc, tx - 5.5, contactY - 1, 3.8, MID_GREEN);
            doc.text(item.text, tx, contactY);
        });
    }

    drawHeader(1);

    const data = getDisplayData();
    const body = [];
    data.forEach(r => {
        r.lines.forEach(line => {
            body.push([
                r.claimId,
                formatDateDisplay(r.date),
                r.hospital || '—',
                r.doctor || '—',
                r.staff || '—',
                r.patientName || '—',
                r.type || '—',
                (r.adjAmount < 0 ? '- $' : '$') + Math.abs(r.adjAmount).toFixed(2),
                r.notes || '—',
                line.itemNumber,
                '$' + line.originalAmount.toFixed(2),
                (line.adjustmentAmount < 0 ? '- $' : '$') + Math.abs(line.adjustmentAmount).toFixed(2)
            ]);
        });
    });

    doc.autoTable({
        startY: tableStartY,
        tableWidth: tableWidth,
        head: [[
            'Claim ID', 'Claim Date', 'Hospital', 'Doctor', 'Staff', 'Patient',
            'Adjustment Type', 'Adjustment Amount', 'Notes', 'Item Number', 'Original Amount', 'Allocated Amount'
        ]],
        body: body,
        styles: {
            fontSize: 7,
            cellPadding: { top: 2, right: 1.6, bottom: 2, left: 1.6 },
            overflow: 'linebreak',
            valign: 'middle',
            halign: 'left',
            textColor: [50, 50, 50],
            lineColor: [210, 215, 220],
            lineWidth: 0.15
        },
        headStyles: {
            fillColor: [58, 90, 138],
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            fontSize: 7.2,
            halign: 'center',
            valign: 'middle',
            cellPadding: { top: 2.4, right: 1.6, bottom: 2.4, left: 1.6 },
            minCellHeight: 6.5
        },
        alternateRowStyles: { fillColor: [248, 249, 251] },
        columnStyles: {
            0: { cellWidth: COL[0], halign: 'left', fontStyle: 'bold', fontSize: 6.8 },
            1: { cellWidth: COL[1], halign: 'center' },
            2: { cellWidth: COL[2], halign: 'left' },
            3: { cellWidth: COL[3], halign: 'left' },
            4: { cellWidth: COL[4], halign: 'left' },
            5: { cellWidth: COL[5], halign: 'left' },
            6: { cellWidth: COL[6], halign: 'center' },
            7: { cellWidth: COL[7], halign: 'right' },
            8: { cellWidth: COL[8], halign: 'left' },
            9: { cellWidth: COL[9], halign: 'center' },
            10: { cellWidth: COL[10], halign: 'right' },
            11: { cellWidth: COL[11], halign: 'right' }
        },
        didParseCell(d) {
            if (d.section === 'body' && (d.column.index === 7 || d.column.index === 11)) {
                const isNeg = String(d.cell.raw).startsWith('- $');
                d.cell.styles.textColor = isNeg ? [176, 48, 48] : [30, 126, 58];
                d.cell.styles.fontStyle = 'bold';
            }
        },
        margin: { top: 18, left: mL, right: mR, bottom: 22 },
        didDrawPage(d) {
            if (d.pageNumber > 1) drawHeader(d.pageNumber);
        }
    });

    let summaryY = doc.lastAutoTable.finalY + 5;
    if (summaryY + 24 > footerRuleY - 3) {
        doc.addPage();
        drawHeader(doc.internal.getNumberOfPages());
        summaryY = 18;
    }
    drawGrandSummaryCardPDF(doc, data, mL, mR, pageW, summaryY);

    const pageCount = doc.internal.getNumberOfPages();
    for (let p = 1; p <= pageCount; p++) {
        doc.setPage(p);
        drawFooter(p, pageCount);
    }

    const filename = 'Adjustment_Report_' + new Date().toISOString().split('T')[0] + '.pdf';
    return { doc, filename };
}


/* ─────────────────────────────────────────────────────────────────────
   UTILS
   ───────────────────────────────────────────────────────────────────── */
function showLoading(msg) {
    document.getElementById('loading-msg').textContent = msg || 'Processing';
    document.getElementById('loading-overlay').classList.add('show');
}
function hideLoading() {
    document.getElementById('loading-overlay').classList.remove('show');
}
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

/* Bind Download PDF the same way as Medi_Elves_Fee_Calculation_Report1 */
document.getElementById("btnPdf").addEventListener("click", exportPDF);