var friends = ['Cindy', 'Sally', 'Cielle', 'Heidi', 'Lynn'];

var locations = ['photo booth', 'bunker', 'coffeehouse', 'treehouse', 'conex', 'office', 'shed', 'ballroom', 'bellstand', 'DFAC'];

var weapons = ['bat', 'wicket', 'paper airplane', 'mouse', 'Ottercase', 'padlock', 'pocket screwdriver', 'HDMI cord', 'Lightning cord', 'hole punch', 'index card', 'throat lozenge', 'glasses', 'belt buckle', 'hair dryer', 'fork', 'sandwich board', 'chair', 'Murse', 'PC card'];

for (var i = 0; i < 100; i++) {
    var h3 = document.createElement('h3');
    h3.innerText = 'Accusation ' + (i + 1);
    h3.addEventListener('click', function () {
        var friend = friends[this % friends.length];
        var location = locations[this % locations.length];
        var weapon = weapons[this % weapons.length];
        alert('Accusation ' + (this + 1) + ': I accuse ' + friend + ', with the ' + weapon + ' in the ' + location + '.');
    }.bind(i));
    document.body.appendChild(h3);
}