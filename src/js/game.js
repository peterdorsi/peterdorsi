var game = new Phaser.Game(800, 300, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

var player;
var badguy;
var platforms;
var cursors;
var score = 0;
var scoreText;

function create() {
    
    game.add.sprite(0,0, 'sky');
    
    platforms = game.add.group();
    
    var ground = platforms.create(0, game.world.height - 64, 'ground');
    ground.scale.setTo(20, 1);
    ground.body.immovable = true;
    
    var ledge = platforms.create(100, 150, 'ground');
    ledge.body.immovable = true;
    
    ledge = platforms.create(270, 110, 'ground');
    ledge.body.immovable = true;
    
    ledge = platforms.create(430, 90, 'ground');
    ledge.body.immovable = true;
    
    ledge = platforms.create(580, 80, 'ground');
    ledge.body.immovable = true;
    
    // The player and its settings
    player = game.add.sprite(32, game.world.height - 150, 'dude');
    badguy = game.add.sprite(282, game.world.height - 250, 'baddie');
    
    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.1;
    player.body.gravity.y = 9;
    player.body.collideWorldBounds = true;
    
    badguy.body.gravity.y = 9;
    badguy.body.collideWorldBounds = true;
    
    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    badguy.animations.add('idle', [2, 3], 10, true);
    
    stars = game.add.group();
 
    for (var i = 0; i < 12; i++) {
        var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 6;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
     }
    
    scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
    
    game.world.setBounds(0, 0, 1400, 300);
    
    fixed = game.add.sprite(300, 320, 'player');
    fixed.fixedToCamera = true;
    fixed.cameraOffset.x = 300;
    fixed.cameraOffset.y = 300;
    
    cursors = game.input.keyboard.createCursorKeys();
    
    game.camera.follow(player);
    
}

function update() {
    //  Collide the player and the stars with the platforms
    game.physics.collide(player, platforms);
    game.physics.collide(badguy, platforms);
    game.physics.collide(stars, platforms);
    game.physics.overlap(player, stars, collectStar, null, this);
    game.physics.overlap(player, badguy, killPlayer, null, this);
    
    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;
    badguy.body.velocity.x = 50;
    
    if (cursors.left.isDown) {
        //  Move to the left
        player.body.velocity.x = -150;
        player.animations.play('left');
    } else if (cursors.right.isDown) {
        //  Move to the right
        player.body.velocity.x = 150;
        player.animations.play('right');
    } else {
        //  Stand still
        player.animations.stop();
        player.frame = 4;
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down) {
        player.body.velocity.y = -350;
    }
    
    badguy.animations.play('idle');
    
    function collectStar (player, star) {
        star.kill();
        score += 10;
        scoreText.content = 'Score: ' + score;
    }
    
    function killPlayer (player, badguy) {
        player.kill();
        
        scoreText.content = 'Score: ' + score;
        game.add.text(game.world.centerX, game.world.centerY, 'YOU LOSE!', { fill: '#ff0000', align: 'center' });
    }
    
    if (score > 110) {
        game.add.text(game.world.centerX, game.world.centerY, 'YOU WIN!', { fill: '#ff0000', align: 'center' });
    }
    
}
