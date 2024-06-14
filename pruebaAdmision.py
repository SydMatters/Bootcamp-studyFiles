def mod2(numRenglones):
    return numRenglones % 2 == 0

def spacesF(numRenglones):
    return " " * numRenglones

def piramideNiveles(n):
    if not mod2(n):
        print("Error")
    else:
        mid = n // 2
        for i in range(mid):
            renglon = spacesF(mid - i - 1)
            for j in range(i + 1):
                renglon += str(j+1)
            for j in range(i,0, -1):
                renglon += str(j)
            print(renglon)
        for i in range(mid):
            renglon = spacesF(i)
            for j in range(mid-i):
                renglon += str(j+1)
            for j in range(mid-i,1,-1):
                renglon += str(j-1)    
            print(renglon)
            

        
def main():
    piramideNiveles(10)


if __name__ == "__main__":
    main()
