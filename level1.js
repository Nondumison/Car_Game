class LevelOne extends Phaser.Scene {
  constructor() {
    super({
      key: 'LevelOne'
    });
  }



 preload ()


{
    this.load.image('grass', 'assets/grass.png');
    this.load.image('road', 'assets/map.jpg');
    this.load.image('guy', 'assets/helicopter.png');
     this.load.image('gold', 'assets/gold.png');


    this.load.image('bush', 'assets/bush1.png');
    this.load.image('car', 'assets/carer.png');
    this.load.image('building', 'assets/building.png');



    this.load.image('dude', 'assets/snake.gif');
    this.load.image('coin', 'assets/1234.png');
    this.load.image('coin2', 'assets/1234.png');
    // this.load.image('invisible', 'assets/invisible3.png');

}

 create ()
{
    this.cameras.main.setBounds(0,0, 1280.01, 829);
    this.physics.world.setBounds(0,0, 1280, 829);
    this.add.image(0, 0, 'grass').setOrigin(0,0);
    // this.add.image(40,35, 'straight');



    road = this.add.image(0, 0, 'road').setOrigin(0,0).setScrollFactor(1);
    // bush = this.physics.add.image(400.5, 301.3, 'bush');

    cursors = this.input.keyboard.createCursorKeys();

    car = this.physics.add.image(150, 300, 'car');

     // car.setCollideWorldBounds(1280, 839, true);
    this.add.image(0, 0, 'building').setOrigin(0,0);

player = this.physics.add.image(950, 500, 'dude');

    bush = this.physics.add.image(40,800, 'bush');
    bush1 = this.physics.add.image(0,0, 'bush');

    // this.add.image(0, 0, 'invisible').setOrigin(0,0);

    bush.body.allowGravity = false;
    this.cameras.main.startFollow(car, true);
    // this.cameras.main.startFollow(scoreText, true);



    this.cameras.main.setZoom(1);


     // coin=this.physics.add.image(400, 300, 'coin');
     // coin=this.physics.add.image(500, 300, 'coin');

     guy = this.physics.add.sprite(300, 300, 'guy');


    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    guy.setBounce(0.2);
    guy.setCollideWorldBounds(true);


      // this.anims.create({
      //     key: 'left',
      //     frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      //     frameRate: 10,
      //     repeat: -1
      // });
      //
      // this.anims.create({
      //     key: 'turn',
      //     frames: [ { key: 'dude', frame: 4 } ],
      //     frameRate: 20
      // });
      //
      // this.anims.create({
      //     key: 'right',
      //     frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      //     frameRate: 10,
      //     repeat: -1
      // });

      this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers('guy', { start: 0, end: 3 }),
          frameRate: 10,
          repeat: -1
      });

      this.anims.create({
          key: 'turn',
          frames: [ { key: 'guy', frame: 4 } ],
          frameRate: 20
      });

      this.anims.create({
          key: 'right',
          frames: this.anims.generateFrameNumbers('guy', { start: 5, end: 8 }),
          frameRate: 10,
          repeat: -1
      });






          coin = this.physics.add.group({
                  key: 'coin',
                  repeat: 11,
                  setXY: { x:200, y: 60, stepX: 70 }
              });

              coin.children.iterate(function (child) {
                  child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

              });
              coin2 = this.physics.add.group({
            key: 'coin2',
            repeat: 10,
            setXY: { x: 200, y: 700, stepX: 70 }
        });

        coin2.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.8, 0.8));

        });


        gold = this.physics.add.group({
            key: 'gold',
            repeat: 0,
            setXY: { x: 800, y: 700, stepX: 200 }
        });

        gold.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.8, 0.8));

        });

        this.physics.add.overlap(car, coin, collectCoin, null, this);

        this.physics.add.overlap(car, coin2, collectCoin2, null, this);

        this.physics.add.overlap(car, gold, collectgold, null, this);

          this.physics.add.collider(car, bush, hitBomb, null, this);
          gameText = this.add.text(640, 414.5, '', { fontSize: '32px', fill: '#fff' });
          scoreText = this.add.text(420, 307, '', { fontSize: '32px', fill: "#fff"});

          this.physics.add.collider(car, invisible, hitinvisible, null, this);
          gameText = this.add.text(640, 414.5, '', { fontSize: '32px', fill: '#fff' });
          scoreText = this.add.text(420, 307, '', { fontSize: '32px', fill: "#fff"});


          this.physics.add.collider(car, bush1, hitBomb, null, this);
          gameText = this.add.text(640, 414.5, '', { fontSize: '32px', fill: '#fff' });
          scoreText = this.add.text(420, 307, '', { fontSize: '32px', fill: "#fff"});


          this.physics.add.collider(car, player, hitsprite, null, this);
          gameText = this.add.text(640, 414.5, '', { fontSize: '32px', fill: '#fff' });
          scoreText = this.add.text(420, 307, '', { fontSize: '32px', fill: "#fff"});




          this.physics.add.collider(car, invisible, hitguy, null, this);
          gameText = this.add.text(640, 414.5, '', { fontSize: '32px', fill: '#fff' });
          scoreText = this.add.text(420, 307, '', { fontSize: '32px', fill: "#fff"});



}



 update ()
{
    car.setVelocity(0);
    player.setVelocity(-50);
    guy.setVelocity(50);

    if (cursors.left.isDown)
    {
        car.setAngle(-90).setVelocityX(-300);
        // player.setVelocity(15);
        //  guy.setVelocity(20);


    }
    else if (cursors.right.isDown)
    {
        car.setAngle(90).setVelocityX(300);
          // player.setVelocity(15);
          // guy.setVelocity(20);
    }

    if (cursors.up.isDown)
    {
      car.setAngle(0).setVelocityY(-300);
      car.body.angle = 90;
        // player.setVelocity(15);
        // guy.setVelocity(20);

    }
    else if (cursors.down.isDown)
    {
        car.setAngle(-180).setVelocityY(300);
          // player.setVelocity(15);
          // guy.setVelocity(20);
    }

    if (gameOver) {
      gameText.setText("Game Over! Rerun to play again.");
      // scoreText.setText('Score: ' + score);

    return;

    }
    if (score===200){
      gameText=this.add.text(640,450,'Level Completed!',{fontSize:'30px'});
      this.physics.pause();
}
}

  }

  var cursors;
  var car;
  var gold;
  var coin2;
  var building;
  var invisible;
  var bush;
  var bush1;
  var player;
  var coin;
  var guy;
  var road;
  var velocity = 0;
  var score =0;
  var scoreText;
  var gameText;
  var gameOver=false;

  function collectCoin (car, coin)
  {
    coin.disableBody(true, true);

      //  Add and update the score
      score += 10;

     scoreText.setText('Score: ' + score);

      // if (coin.countActive(true) === 0)
      // {
      //
      //     coin.children.iterate(function (child) {
      //
      //         child.enableBody(true, child.x, 0, true, true);
      //
      //     });
      //   }
  }
  function collectCoin2 (car, coin2)
  {
    coin2.disableBody(true, true);

      //  Add and update the score
      score += 10;
      scoreText.setText('Score: ' + score);

      // if (coin.countActive(true) === 0)
      // {
      //
      //     coin.children.iterate(function (child) {
      //
      //         child.enableBody(true, child.x, 0, true, true);
      //
      //     });
      //   }
  }
   function collectgold(car, gold)
  {
    gold.disableBody(true, true);

    this.physics.pause();

      //  Add and update the score
      score += 20;
      // scoreText.setText('Level Completed & your score is: ' + score);
      // gameText.setText(" Rerun to play again.");
      gameText=this.add.text(640,414.5,'Level Completed!',{fontSize:'32px'});




      // text.setText('Level Completed');

      // if (coin.countActive(true) === 0)
      // {
      //
      //     coin.children.iterate(function (child) {
      //
      //         child.enableBody(true, child.x, 0, true, true);
      //
      //     });
      //   }
  }
function hitBomb (car, bush)
 {
     this.physics.pause();

     bush.setTint(0xff0000);

      gameOver = true;
 }
 function hitBomb (car, bush1)
  {
      this.physics.pause();

      bush1.setTint(0xff0000);

       gameOver = true;
  }
 function hitguy (car, invisible)
  {
      this.physics.pause();

      invisible.setTint(0xff0000);

       gameOver = true;
  }
  function  hitsprite (car, player)
   {
       this.physics.pause();

       player.setTint(0xff0000);

        gameOver = true;
   }
 function hitinvisible (car, invisible)
  {
      this.physics.pause();

      invisible.setTint(0xff0000);

       gameOver = true;
  }
