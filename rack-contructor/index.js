$(function() {
    const maxShelfsOnStand = 7;
    const maxRacks = 4;

    $(".create__model").on("click", function () {
        let countStands = parseInt($(".stand__num").val())
        let countShelfs = parseInt($(".shelf__num").val())

        $(".model").html(`<ul class="stand-container"></ul>`)

        if(countShelfs <= maxShelfsOnStand) {
            console.log('We are in if')
            for(let i = 0; i < countStands; i++) {
                $(".stand-container").append(`<li class="stand stand__` + i + `"></li>`);

                if(i === 0) {
                    $(".stand-container").append(`<ul class="shelf shelf-container_` + i + `"></ul>`)
                }

                console.log('IF: count stands: ', i)
            }

            console.log('Count Shelfs input: ', countShelfs)
            for(let j = 0; j < countShelfs; j++) {
                $(".shelf, .shelf-container_" + j).append(`<li class="shelff shelf__` + j + `"></li>`);
                console.log('IF: count shelfs: ', j)
            }

        } else {
            console.log('We are in else')
            //countStands++;
            for (let i = 0; i < countStands + 1; i++) {
                $(".stand-container").append(`<li class="stand stand__` + i + `"></li>`).append(`<ul class="shelf shelf-container_` + i + `"></ul>`)
                console.log('ELSE: count stands: ', i)
            }

            for (let j = 0; j < countShelfs; j++) {
                $(".shelf, .shelf-container_" + j).append(`<li class="shelff shelf__` + j + `"></li>`);
                console.log('ELSE: count shelfs: ', j)
            }
        }

            /*for(let i = 0; i < countStands; i++) {

                $(".stand-container").append(`<li class="stand stand__` + i + `"></li>`);
                if(i == 0) {
                    $(".stand-container").append(`<ul class="shelf-container_` + i + `"></ul>`)
                }
            }

            for(let i = 0; i < countShelfs; i++) {
                $(".shelf-container").append(`<li class="shelf shelf__` + i + `"></li>`);
            }*!/
        }







        /*for(let i = 0; i < countShelfs; i++) {
            $(".shelf-container").append(`<li class="shelf shelf__` + i + `"></li>`);
        }*/

        // for(let i = 0; i < countShelfs; i++) {
        //     $(".shelf-container").append(`<li class="shelf shelf__` + i + `"></li>`);
        // }
        //
        // for(let i = 0; i < countStands; i++) {
        //     $(".stand-container").html(`<li class="stand stand__` + i + `"></li>`);
        // }




    })
});