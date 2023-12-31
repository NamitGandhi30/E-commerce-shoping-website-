#include <graphics.h>
#include <math.h>
#include <stdio.h>
#include <conio.h>

 int characterA[8][8] = {
        {0, 0, 1, 1, 1, 1, 0, 0},
        {0, 1, 0, 0, 0, 0, 1, 0},
        {1, 0, 0, 0, 0, 0, 0, 1},
        {1, 0, 0, 0, 0, 0, 0, 1},
        {1, 1, 1, 1, 1, 1, 1, 1},
        {1, 0, 0, 0, 0, 0, 0, 1},
        {1, 0, 0, 0, 0, 0, 0, 1},
        {0, 0, 0, 0, 0, 0, 0, 0}
    };

    int characterB[8][8] = {
        {1, 1, 1, 1, 1, 1, 0, 0},
        {1, 0, 0, 0, 0, 0, 1, 0},
        {1, 0, 0, 0, 0, 0, 1, 0},
        {1, 1, 1, 1, 1, 1, 0, 0},
        {1, 0, 0, 0, 0, 0, 1, 0},
        {1, 0, 0, 0, 0, 0, 1, 0},
        {1, 1, 1, 1, 1, 1, 0, 0},
        {0, 0, 0, 0, 0, 0, 0, 0}
    };

    int characterH[8][8] = {
        {1, 0, 0, 0, 0, 0, 1, 0},
        {1, 0, 0, 0, 0, 0, 1, 0},
        {1, 0, 0, 0, 0, 0, 1, 0},
        {1, 1, 1, 1, 1, 1, 1, 0},
        {1, 0, 0, 0, 0, 0, 1, 0},
        {1, 0, 0, 0, 0, 0, 1, 0},
        {1, 0, 0, 0, 0, 0, 1, 0},
        {0, 0, 0, 0, 0, 0, 0, 0}
    };

    int characterI[8][8] = {
	{1, 1, 1, 1, 1, 1, 1, 1},
	{0, 0, 0, 1, 1, 0, 0, 0},
	{0, 0, 0, 1, 1, 0, 0, 0},
	{0, 0, 0, 1, 1, 0, 0, 0},
	{0, 0, 0, 1, 1, 0, 0, 0},
	{0, 0, 0, 1, 1, 0, 0, 0},
	{0, 0, 0, 1, 1, 0, 0, 0},
	{1, 1, 1, 1, 1, 1, 1, 1}
    };

    int characterS[8][8] = {
        {0, 1, 1, 1, 1, 0, 0, 0},
        {1, 0, 0, 0, 0, 1, 0, 0},
        {1, 0, 0, 0, 0, 0, 0, 0},
        {0, 1, 1, 1, 1, 0, 0, 0},
        {0, 0, 0, 0, 0, 1, 0, 0},
        {0, 0, 0, 0, 0, 0, 1, 0},
        {1, 0, 0, 0, 0, 0, 1, 0},
        {0, 1, 1, 1, 1, 0, 0, 0}
    };

    int characterE[8][8] = {
        {1, 1, 1, 1, 1, 1, 1, 0},
        {1, 0, 0, 0, 0, 0, 0, 0},
        {1, 0, 0, 0, 0, 0, 0, 0},
        {1, 1, 1, 1, 1, 1, 0, 0},
        {1, 0, 0, 0, 0, 0, 0, 0},
        {1, 0, 0, 0, 0, 0, 0, 0},
        {1, 1, 1, 1, 1, 1, 1, 0},
        {0, 0, 0, 0, 0, 0, 0, 0}
    };

    int characterK[8][8] = {
        {1, 0, 0, 0, 0, 0, 1, 0},
        {1, 0, 0, 0, 0, 1, 0, 0},
        {1, 0, 0, 0, 1, 0, 0, 0},
        {1, 1, 0, 1, 0, 0, 0, 0},
        {1, 0, 1, 0, 0, 0, 0, 0},
        {1, 0, 0, 1, 0, 0, 0, 0},
        {1, 0, 0, 0, 1, 0, 0, 0},
        {0, 0, 0, 0, 0, 0, 0, 0}
    };
	


void element(int arr[8][8],int x,int y){
	int i,j;
	for(i = 0;i<8;i++){
		for(j = 0;j<8;j++){
			if(arr[i][j] == 1){
			putpixel(x+j,y+i,WHITE);
			}
		}
	}
}

int main() {
    int gd = DETECT, gm;
    int x1, y1, x2, y2, depth;
    initgraph(&gd, &gm, "C:\\TURBOC3\\BGI");
    element(characterA,100,100);
    element(characterB,110,100);
    element(characterH,120,100);
    element(characterI,130,100);
    element(characterS,140,100);
    element(characterH,150,100);
    element(characterE,160,100);
    element(characterK,170,100);
    getch();
    closegraph();
    return 0;
}
