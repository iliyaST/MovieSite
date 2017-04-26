class ClosestCinema {

    constructor() {
        this.cinemaNames = {
<<<<<<< HEAD
            ParkCenterSofia: "http://kino.bg/mobile/programme/theater/theaterId/22",
            MallOfSofia: "http://kino.bg/mobile/programme/theater/theaterId/5",
            ArenaSofiaWest: "http://kino.bg/mobile/programme/theater/theaterId/7",
            BulgariaMall: "http://kino.bg/mobile/programme/theater/theaterId/19",
            ArenaMladost: "http://kino.bg/mobile/programme/theater/theaterId/6",
            ParadiseCenter: "http://kino.bg/mobile/programme/theater/theaterId/20",
            TheMall: "http://kino.bg/mobile/programme/theater/theaterId/8"
=======
            ParkCenterSofia: "http://cinegrand.bg/",
            MallOfSofia: "http://www.cinemacity.bg/en/SOFIA",
            ArenaSofiaWest: "https://www.kinoarena.com/en/program/view/kino-arena-zapad-1",
            BulgariaMall: "https://www.kinoarena.com/en/program/view/kino-arena-deluxe-bulgaria-mall-1",
            ArenaMladost: "https://www.kinoarena.com/en/program/view/kino-arena-mladost-1",
            ParadiseCenter: "http://paradise-center.com/bg/cinema",
            TheMall: "https://www.kinoarena.com/en/program/view/kino-arena-the-mall-1"
>>>>>>> 1575cca9000d37ca6982509b1687261655c8ab4a
        }
        this.closestLocation = {};
    }

    fIndClosestCinema() {

        let cinemas = (function getCinemas() {
<<<<<<< HEAD

            let parkCenterSofia = {
                name: "ParkCenterSofia",
                lat: 42.6789322,
                long: 23.318601
=======
            let parkCenterSofia = {
                name: "ParkCenterSofia",
                lat: 42.6789,
                long: 23.3208
>>>>>>> 1575cca9000d37ca6982509b1687261655c8ab4a
            };

            let mallOfSofia = {
                name: "MallOfSofia",
<<<<<<< HEAD
                lat: 42.6982035,
                long: 23.3063034
=======
                lat: 42.6982,
                long: 23.3085
>>>>>>> 1575cca9000d37ca6982509b1687261655c8ab4a
            };

            let arenaSofiaWest = {
                name: "ArenaSofiaWest",
<<<<<<< HEAD
                lat: 42.7050372,
                long: 23.2877732
=======
                lat: 42.7050,
                long: 23.2900
>>>>>>> 1575cca9000d37ca6982509b1687261655c8ab4a
            };

            let bulgariaMall = {
                name: "BulgariaMall",
<<<<<<< HEAD
                lat: 42.6643476,
                long: 23.286811
=======
                lat: 42.6643,
                long: 23.2890
>>>>>>> 1575cca9000d37ca6982509b1687261655c8ab4a
            };

            let arenaMladost = {
                name: "ArenaMladost",
<<<<<<< HEAD
                lat: 42.6241892,
                long: 23.374204
=======
                lat: 42.6242,
                long: 23.3764
>>>>>>> 1575cca9000d37ca6982509b1687261655c8ab4a
            };

            let paradiseCenter = {
                name: "ParadiseCenter",
<<<<<<< HEAD
                lat: 42.6586161,
                long: 23.3136703
=======
                lat: 42.6586,
                long: 23.3159
>>>>>>> 1575cca9000d37ca6982509b1687261655c8ab4a
            };

            let theMall = {
                name: "TheMall",
<<<<<<< HEAD
                lat: 42.656041,
                long: 23.3603534
=======
                lat: 42.6610,
                long: 23.3829
>>>>>>> 1575cca9000d37ca6982509b1687261655c8ab4a
            };

            let cinemas = [];
            cinemas.push(theMall, paradiseCenter, arenaMladost, bulgariaMall, arenaSofiaWest, mallOfSofia, parkCenterSofia);
            return cinemas;
        })();

        var myPromise = new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((pos) => {
                resolve(pos);
            })
        });

        function calculateDistance(firstLocation, secondLocation) {
            let latDif = (secondLocation.lat - firstLocation.lat);
            let longDif = (secondLocation.long - firstLocation.long);
            let distance = (Math.sqrt(latDif * latDif) + (longDif * latDif));
<<<<<<< HEAD
            return distance;
=======
>>>>>>> 1575cca9000d37ca6982509b1687261655c8ab4a
        }

        function getClosestCinema(myLocation) {
            let minDistance;
            let closestCinema;

            cinemas.forEach(cinema => {
                let currentDistance = calculateDistance(myLocation, cinema);

                if (minDistance == undefined || currentDistance < minDistance) {
                    minDistance = currentDistance;
                    closestCinema = cinema;
                }
            })

            return closestCinema;
        }

        function parseLocation(pos) {

            let resultLocation = {};
            resultLocation.lat = pos.coords.latitude;
            resultLocation.long = pos.coords.longitude;

            return resultLocation;
        }

        myPromise
            .then(parseLocation)
            .then(currentLocation => {
                this.closestLocation = getClosestCinema(currentLocation);
                return this.closestLocation;
            })
            .then(result => {
                let url = this.cinemaNames[result.name];
                return url;
            })
<<<<<<< HEAD
            .then(url => {
                let iframe = document.getElementById("inner-site");
                iframe.src = url;
            })
=======
            .then(console.log)
>>>>>>> 1575cca9000d37ca6982509b1687261655c8ab4a
    }
}

export { ClosestCinema };