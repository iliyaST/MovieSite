class ClosestCinema {

    constructor() {
        this.cinemaNames = {
            ParkCenterSofia: "http://kino.bg/mobile/programme/theater/theaterId/22",
            MallOfSofia: "http://kino.bg/mobile/programme/theater/theaterId/5",
            ArenaSofiaWest: "http://kino.bg/mobile/programme/theater/theaterId/7",
            BulgariaMall: "http://kino.bg/mobile/programme/theater/theaterId/19",
            ArenaMladost: "http://kino.bg/mobile/programme/theater/theaterId/6",
            ParadiseCenter: "http://kino.bg/mobile/programme/theater/theaterId/20",
            TheMall: "http://kino.bg/mobile/programme/theater/theaterId/8"
        }
        this.closestLocation = {};
    }

    fIndClosestCinema() {

        let cinemas = (function getCinemas() {

            let parkCenterSofia = {
                name: "ParkCenterSofia",
                lat: 42.6789322,
                long: 23.318601
            };

            let mallOfSofia = {
                name: "MallOfSofia",
                lat: 42.6982035,
                long: 23.3063034
            };

            let arenaSofiaWest = {
                name: "ArenaSofiaWest",
                lat: 42.7050372,
                long: 23.2877732
            };

            let bulgariaMall = {
                name: "BulgariaMall",
                lat: 42.6643476,
                long: 23.286811
            };

            let arenaMladost = {
                name: "ArenaMladost",
                lat: 42.6241892,
                long: 23.374204
            };

            let paradiseCenter = {
                name: "ParadiseCenter",
                lat: 42.6586161,
                long: 23.3136703
            };

            let theMall = {
                name: "TheMall",
                lat: 42.656041,
                long: 23.3603534
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
            return distance;
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
            .then(url => {
                let iframe = document.getElementById("inner-site");
                iframe.src = url;
            })
    }
}

export { ClosestCinema };
