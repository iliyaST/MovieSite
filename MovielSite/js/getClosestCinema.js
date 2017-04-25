class ClosestCinema {

    constructor() {
        this.cinemaNames = {
            ParkCenterSofia: "http://cinegrand.bg/",
            MallOfSofia: "http://www.cinemacity.bg/en/SOFIA",
            ArenaSofiaWest: "https://www.kinoarena.com/en/program/view/kino-arena-zapad-1",
            BulgariaMall: "https://www.kinoarena.com/en/program/view/kino-arena-deluxe-bulgaria-mall-1",
            ArenaMladost: "https://www.kinoarena.com/en/program/view/kino-arena-mladost-1",
            ParadiseCenter: "http://paradise-center.com/bg/cinema",
            TheMall: "https://www.kinoarena.com/en/program/view/kino-arena-the-mall-1"
        }
        this.closestLocation = {};
    }

    fIndClosestCinema() {

        let cinemas = (function getCinemas() {
            let parkCenterSofia = {
                name: "ParkCenterSofia",
                lat: 42.6789,
                long: 23.3208
            };

            let mallOfSofia = {
                name: "MallOfSofia",
                lat: 42.6982,
                long: 23.3085
            };

            let arenaSofiaWest = {
                name: "ArenaSofiaWest",
                lat: 42.7050,
                long: 23.2900
            };

            let bulgariaMall = {
                name: "BulgariaMall",
                lat: 42.6643,
                long: 23.2890
            };

            let arenaMladost = {
                name: "ArenaMladost",
                lat: 42.6242,
                long: 23.3764
            };

            let paradiseCenter = {
                name: "ParadiseCenter",
                lat: 42.6586,
                long: 23.3159
            };

            let theMall = {
                name: "TheMall",
                lat: 42.6610,
                long: 23.3829
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
            .then(console.log)
    }
}

export { ClosestCinema };