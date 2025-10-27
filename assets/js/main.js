
const houses = [
  //Industrial houses:
  [
    "https://i.pinimg.com/736x/1d/46/03/1d460300078f48c3dc99e1bf0a4ed87f.jpg",
    "https://i.pinimg.com/736x/48/d8/1f/48d81fd87f8bbd9bc7d7191efea30452.jpg",
    "https://i.pinimg.com/736x/ca/80/de/ca80ded66c2771bbb2c9834c2ecf6a48.jpg",
    "https://i.pinimg.com/1200x/b9/6c/08/b96c0819f47cbf0408b30729b558169f.jpg",
    "https://i.pinimg.com/736x/5d/fb/c7/5dfbc70b1742d2c0734cb78f22cba103.jpg",
    "https://i.pinimg.com/1200x/ab/f9/b9/abf9b998554f013e3eb4108b357a2938.jpg",
    "https://i.pinimg.com/1200x/84/54/74/845474188b0926e1deb948794e0dda5f.jpg",
    "https://i.pinimg.com/1200x/05/a6/75/05a675a07149dfc99fffa44b8d93d041.jpg",
    "https://i.pinimg.com/1200x/18/ec/a7/18eca72b8e8a105dcc58b23186e15dad.jpg",
    "https://i.pinimg.com/1200x/f3/18/d8/f318d8e407d95185669ebdc53d0004d2.jpg",
    "https://i.pinimg.com/1200x/5d/2a/07/5d2a07232ae96a04773da1826fd7e853.jpg",
    "https://i.pinimg.com/736x/cb/ba/86/cbba86c132b1b2b95f9417dd13bbda85.jpg",
    "https://i.pinimg.com/736x/ca/5b/03/ca5b03e2a021ac530180a7ddb4e3dd9b.jpg",
    "https://i.pinimg.com/1200x/c4/64/46/c46446db2e9a8c1e7d089702454ed892.jpg",
    "https://i.pinimg.com/1200x/27/b1/c3/27b1c315cbcb8777d10f8ff7fcdc3d46.jpg",
    "https://i.pinimg.com/1200x/4e/f8/b9/4ef8b934aa775e5469e28b3f419a98d4.jpg",
    "https://i.pinimg.com/736x/0a/69/dd/0a69ddcc316cfa252491fa4f490e7b5e.jpg",
    "https://i.pinimg.com/1200x/0e/97/82/0e97822e0f99758da163921ee430b6b6.jpg",
    "https://i.pinimg.com/736x/50/ce/1e/50ce1ef3c12f302d1c6f920473aaddcb.jpg",
    "https://i.pinimg.com/1200x/68/56/80/685680ac3a192b3eb460bddeb248d539.jpg",
    "https://i.pinimg.com/736x/a3/6d/fa/a36dfa91b0349c28859972998aad272a.jpg",
    "https://i.pinimg.com/1200x/da/49/84/da4984e78577fe941f00c876489a7726.jpg",
    "https://i.pinimg.com/1200x/88/d8/37/88d8378ca09080b543a86d7d1ca9c919.jpg",
    "https://i.pinimg.com/1200x/dd/af/f0/ddaff043987ad82a3d79842e419e3516.jpg"    
  ],

  //Modern houses:
  [
    "https://i.pinimg.com/originals/bd/d4/68/bdd46820e74d6dff65373f19b4e305d7.jpg",
    "https://adorable-home.com/wp-content/uploads/2016/10/Interior-Design-Style-Modern-defined.jpg",
    "https://blog.buyerselect.com/wp-content/uploads/2024/05/organic-modern-interior-design.jpg",
    "https://i.pinimg.com/736x/19/19/71/191971ccc13f79a9e278593db03b76c0.jpg",
    "https://i.pinimg.com/736x/96/9e/29/969e29466c4040aa181f7d80e6cac331.jpg",
    "https://i.pinimg.com/1200x/46/9a/f7/469af73674363bdd1c5431f02254ab39.jpg",
    "https://i.pinimg.com/1200x/42/cd/c5/42cdc5539f770b9300be9b4b00147024.jpg",
    "https://i.pinimg.com/1200x/7c/4b/01/7c4b0178abee549291869dedcd2c102f.jpg",
    "https://i.pinimg.com/1200x/43/80/f9/4380f9bb85ab38a3d22ddc4d5ff9d160.jpg",
    "https://i.pinimg.com/1200x/1d/75/a4/1d75a4c2d8399c66739b5b8cdd013740.jpg",
    "https://i.pinimg.com/1200x/97/6a/1f/976a1fa6f5d532022a12c61a4bf25017.jpg",
    "https://i.pinimg.com/736x/af/b6/3d/afb63dc644672aec6e50c3ce77546e74.jpg",
    "https://i.pinimg.com/736x/a4/64/39/a46439319b1df2d4c896a2190d68bbc0.jpg",
    "https://i.pinimg.com/736x/4d/0d/9d/4d0d9d4ae563499c3c73be931290a3ef.jpg",
    "https://i.pinimg.com/736x/ed/9d/2a/ed9d2a11c1b53b3e12f4ac9ac53484e4.jpg",
    "https://i.pinimg.com/1200x/00/a5/db/00a5db5aae0e9a2319725e1706602940.jpg",
    "https://i.pinimg.com/1200x/55/cb/43/55cb4349e2e096c089eacbc4f244e0a2.jpg",
    "https://i.pinimg.com/1200x/b0/40/b3/b040b316e39519b9a93cc470703dc23e.jpg",
    "https://i.pinimg.com/736x/01/f7/62/01f7620846fcc00d135ad37f993ea442.jpg",
    "https://i.pinimg.com/736x/f6/52/57/f65257c3378fece8bf80d0481944b308.jpg",
    "https://i.pinimg.com/736x/63/4c/ca/634cca523d4a1e1153311d43acc44f6f.jpg",
    "https://i.pinimg.com/1200x/0c/ed/4d/0ced4df68655671fdf8efd71e73106f0.jpg",
    "https://i.pinimg.com/736x/f1/bb/f9/f1bbf901d611083f0db1d1802fe56af6.jpg",
    "https://i.pinimg.com/1200x/ea/8c/7e/ea8c7ee64e1ae418f2af26079f8db2b9.jpg",
    "https://i.pinimg.com/1200x/bc/44/9a/bc449a3bfc3704cbf124fe9417030a2b.jpg",
    "https://i.pinimg.com/1200x/87/1b/30/871b30c3826864fb4019865c9a385ff7.jpg",
    "https://i.pinimg.com/1200x/61/2a/80/612a80f39792a110f4212d1f84ceb5eb.jpg",
    "https://i.pinimg.com/736x/f1/23/b3/f123b37213cc80954d560fcd9f187546.jpg",
    "https://i.pinimg.com/736x/e7/7c/df/e77cdffd8295269b2377035c4535f8c9.jpg",
    "https://i.pinimg.com/1200x/e5/19/3a/e5193ae1d52280047cfb649c9f9ed3ba.jpg",
    "https://i.pinimg.com/1200x/9b/b3/cf/9bb3cf885b231c007a681d79c3113627.jpg",
    "https://i.pinimg.com/1200x/66/86/d6/6686d65c6f66027c0b239e7e0c46deb2.jpg"
  ],

  //Farmhouses:
  [
    "https://i.pinimg.com/1200x/82/08/50/820850bfb9a35b7f597926e543f2a592.jpg",
    "https://i.pinimg.com/1200x/af/56/c0/af56c090245af55d68d36fa47c7560da.jpg",
    "https://i.pinimg.com/736x/89/64/55/8964554578e62e0a3b88c8cedfac2eae.jpg",
    "https://i.pinimg.com/1200x/86/fa/a3/86faa3627be9b39ad97c33552980b4ce.jpg",
    "https://i.pinimg.com/1200x/65/17/94/65179432f816b016214c4019ee0982cc.jpg",
    "https://i.pinimg.com/736x/f3/97/58/f39758e05bcbcc30606ffa503be82173.jpg",
    "https://i.pinimg.com/736x/ca/e0/f7/cae0f73096685f1f8f2151a69639248b.jpg",
    "https://i.pinimg.com/1200x/71/de/f7/71def7d76c2b72867c5d981d25f6b781.jpg",
    "https://i.pinimg.com/1200x/fd/77/52/fd77527604105e5269ff839b9dfaa14f.jpg",
    "https://i.pinimg.com/736x/54/b0/86/54b0862fabfe0701ccf56d26d655bb2a.jpg",
    "https://i.pinimg.com/1200x/59/02/c9/5902c97c94a4d0dd97226e06ffaf72c5.jpg",
    "https://i.pinimg.com/1200x/9d/54/2d/9d542d5afaf9d0b914c2d2772938f698.jpg",
    "https://i.pinimg.com/1200x/ac/79/d8/ac79d8a3ca522ca8bded2ab0e960f94a.jpg",
    "https://i.pinimg.com/736x/53/e1/94/53e19403fb5c1dc917b5920b9bcce0d8.jpg",
    "https://i.pinimg.com/736x/b6/60/3e/b6603e4b79d111441c60b0e81c3fc99a.jpg",
    "https://i.pinimg.com/736x/10/06/3c/10063c9b05dbff8ebdc4226533cb4145.jpg",
    "https://i.pinimg.com/736x/55/59/9f/55599f619e23932a3cdf81f7ac1b03ae.jpg",
    "https://i.pinimg.com/1200x/63/de/02/63de02322c564a9b4bf0e551976c268e.jpg",
    "https://i.pinimg.com/736x/fb/70/7d/fb707d117c25e0ad30674b2f7a29919f.jpg",
    "https://i.pinimg.com/1200x/79/64/ce/7964ce6de5f93f6fb1b514d77bc65748.jpg",
    "https://i.pinimg.com/1200x/6c/2f/18/6c2f18ab0be82f4d9f2bf4149ba5cb2d.jpg",
    "https://i.pinimg.com/1200x/3c/ba/39/3cba3904790aca9482eb48aee5e44c13.jpg",
    "https://i.pinimg.com/736x/66/ff/36/66ff366ac317df8225bcd821d43d1d02.jpg",
    "https://i.pinimg.com/1200x/fc/da/16/fcda164986ba01f1dfe24416d0f22640.jpg",
    "https://i.pinimg.com/1200x/91/35/57/9135570b09a420af35e133334cf7ea2e.jpg",
    "https://i.pinimg.com/1200x/c4/12/0c/c4120caf1ffe850a4d5e3a6458680c0b.jpg",
    "https://i.pinimg.com/736x/57/c6/ed/57c6edd835dab3c20d47db30cc82f5e0.jpg",
    "https://i.pinimg.com/1200x/80/18/e0/8018e0a53a579520f76e5185233b6baa.jpg",
    "https://i.pinimg.com/1200x/30/d8/b1/30d8b1e7c7a52548272c7b91b5d40c3d.jpg",
    "https://i.pinimg.com/1200x/0c/df/08/0cdf08101948f0482d71ec9c6014624b.jpg",
    "https://i.pinimg.com/1200x/ec/c7/c0/ecc7c03a69e242f5f952853c27342590.jpg",
    "https://i.pinimg.com/1200x/d0/a0/5a/d0a05afbad0ba67603a471534f249d17.jpg",
    "https://i.pinimg.com/736x/14/35/2c/14352c8b4cd22ec6e9382d29036d1745.jpg"
  ]
];

function displayHouse(arr) {
  let randomI = Math.floor(Math.random() * arr.length);

  for (let i = 0; i < arr.length; i++) {
    if (i == randomI) {
      
        document.getElementById(
          "house"
        ).innerHTML = `<img src="${arr[i]}">`;
      
    }
  }
}

function displayIndustrial(){
  displayHouse(houses[0]);
}

function displayModern(){
  displayHouse(houses[1]);
}

function displayFarmhouse(){
  displayHouse(houses[2]);
}

document.getElementById("industrial-btn").addEventListener("click", displayIndustrial);

document.getElementById("modern-btn").addEventListener("click", displayModern);

document.getElementById("farmhouse-btn").addEventListener("click", displayFarmhouse);

