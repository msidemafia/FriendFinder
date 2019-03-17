var friendsData = [
    {
        name: "Corn",
        photo: "https://www.healthline.com/hlcmsresource/images/AN_images/AN250-Corn-With-Lime-732x549-thumb.jpg",
        scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },
    {
        name: "Dave",
        photo: "http://noobstore.com/prodimages/tshirt34-m-dave-White-art-280.gif",
        scores: [1, 4, 3, 2, 2, 4, 1, 2, 3, 1]
    },
    {
        name: "Sam Smith",
        photo: "https://pmcvariety.files.wordpress.com/2017/09/sam-smith.jpg?w=1000&h=563&crop=1",
        scores: [4, 3, 1, 2, 1, 1, 4, 3, 5, 2]
    },
    {
        name: "Pickle Rick",
        photo: "https://mondrian.mashable.com/uploads%252Fstory%252Fthumbnail%252F53545%252F2a8a9e80-4ed6-4f6f-b504-fd11fbca2531.png%252F950x534.png?signature=QausOcUw91TNrUQ9qSnpv5GL68Q=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com",
        scores: [2, 5, 5, 3, 4, 3, 2, 1, 3, 5]
    },
    {
        name: "Rick Astley",
        photo: "http://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png",
        scores: [3, 3, 3, 4, 2, 2, 3, 5, 4, 3]
    },
    {
        name: "Box of Kittens",
        photo: "http://i.imgur.com/3OghKsb.gif",
        scores: [1, 4, 2, 2, 3, 3, 2, 4, 5, 4]
    },
    {
        name: "Tom",
        photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhMVFRUWFRUVFhUXFhUVGhcVFxcWFxUSFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQFS0dFxkrLSstKy0rLS0tLS0tLS0tKy0tLS0tLTctLTctLTctKzctLS0rKysrKy0tKystKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAD0QAAEDAgQEAwUHAwMEAwAAAAEAAhEDIQQSMUEFUWFxBiKRE4GhscEUMjNCUtHwcuHxI3OTFWKSsgc0Q//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACARAQEBAAIDAAIDAAAAAAAAAAABEQIhAxIxQVETImH/2gAMAwEAAhEDEQA/ANp1Q8rc1IvCQYZ0tKgaIkmTdHabIi+pYkHomqGwI1sp+zGicCFOUSxH3KTQnSVYKSDR1cB+r6BFUWtieuqVhSh03S+p3A+F/io0jfL3RKdMNEDcyU3sgDmvJEJxWq2LMB8X8zCR0NiUSnTbTJaBY6O+kotWiHAiDeJPZNiqzGjzkNB5qfXB7AltnVNXO8o6DkrKrUWiAcwyCXCFGli2VDGa4MpTid5LmVMUzagOhCkFcidReY1QjVhsuE3i1+yWJbMDNG55nohVg6GNzQCSTImeSmjB2Pnp0OyGKVOdBOqk+RuXTohGllIve55I08omQAiT2BNh2CnUEmTqAhU2NtMOPr/hKqwkk5oAB+SdvRYKWNcOhuoU6IBJ15Dkp0hAA6fupFMu4E2gJLjcpFoLpnRpEd0QJnUwUrNGoU4JcR29FIJBsaJ5VJt0kk6SCxbc4KMhSyJihSMpkrJi0IgOmTNt25qBqjQXPRCkqtTKCelkKnQkBz5LtdYjpAT15LZ3BBjosvxD4kp4UQAKlUicuw5ZoSzRmtHEYxlIPdVcGNbESb6bc1x2O/8AkC5FGlvZ7tx2XMcX4tWxLy+qR/Q37o5LPJ+CrqK9W3W8V4xxJNYgcgGhUsRjH1STVqOeSI1t7uSolydoS05Fv7S8ANFR5A0E6IuF4tVZo6T1VIyEzggrxdDw/jT9QYIIkTr2XRYLj9TOA8S0/BeesqELXwOPmxJzbclKbI9NoVW1BLbohAP80XHcJ4s6gYiWnULpsJjBUbLNJvbbklv7Eq5lFtOigx4OhlCqvJaYME6WlSa11gXDsAEHomUawovIAN4Q7EmZEbaKdYNiYvCfwkmVAdNOalKE1ktBJ0FgmkwG/mgEnkP3RKWDKBrN3I9QmiCBJPOUDDupySAASSL/ADujTsWGvB0KcBRZTGohECaDJJ0kDBT5n/02TVHwQI1n3RunpOMGxmSUMVJJJBB+6Afihe70KT/dQe/lGse881ULsojm+PeSp4gAPBA+6ASOd9FOn6ilg1cc3a3wRA3kotZeT8FMp90lLjWM9jh6tX9LLdzZeU/aC65Mk3JP7r0Hx4XfYzlOrwCI2XL8N4GXAZjE3tsEcuWRrw42sTE0QADrOw27qsWrpuL8EfSa11IF0uOYR6FTwvhurVgwGWkkqPeL/irmWUTPXVENMWAuSujxXB6tLyZR5rF4uYVBlEU6zSxpIaDaN4VeyvSsloiWoCuPaXPJIgk2VaqyJCqM7DNKmymYPT1TUqciUa8C8iCptT6tXA4gvF9Rqtjw/wARNOsG5hlf5SOR2XN8KqXLeYV5vkAgTF56g6o+psx6RUogncEW1+icMA2/dV6Vb2rGuabEAkjboVNxMOyk7AE80SkI6kDeFFzm8xbnf4JnVTIi+knknfTAIgASTJ6J6WIhgdfNfeNFGjRLS42JMX5BIk+ZwiCIG2m6NSFhKRonyjWevKVKBpY+iZzufcIdOm1VKWdCtaBoITlDLtgnY7bdGl608p1HOkgvWtAqDuqfMo5/VM8V62DJyw6IcX9zslUpmDeSSJ6gI5cmlTZKraYpymJUc/VOJyqPH6TXYZ7XiQSB751WRgWBoA5Aei1+OyaIHN46dVmUqcLHn9d3gmrlN6vUD1VDCsur/sobP1WfbruSK+Jpg8lmYzCi8ADqtI1WnQj1Cq1DdHadljnsdg2sLHakAlc3icPcnSTddhxVpyk8lyWKgkrfhdcvlmBNY0fmQarzzUHUzqk50iFd6ZHp1CCI5yt4k7Gx+qwaVOSIOpW643Dek/KymM+TpfBxDmVGyfKR2juuje0EQuc8LU3Ci+Iu6+2my3spDQ20lETYeqGhuoEQpBoME7hBq0tgYgTe8lTEzlm8AmOSNElEeyGwB0Uosgue6wbrmMk7hEa4gS5OC6i8Wvc9OSmGgITKpg94CiDNswyjreUAXmoVGTEe9SoaC6nCIm8gsvRJGSTT7DHU27KGQ8u/NFJM2USYKGmou7KBbbREa9RJmQgaiaZSa29tv5CQqiJMhJ9WE4HL+MOMFlSnSY1ziBncBJspcP4myo3yzO7TYj3K14owTobXpkNfGRxPI6LCNB4fmBBJDA4nWxvlI2Kz8kldfhtk6b1TElgsLmbrKqtxLj56zWNJsN/mtoOa6BFo+Kz/AGYZVJcwPEEDN9Flx5TXTy4WxR+y1m3a7NyurWExjiIeIO6r4Tgppu9oKsbZBJGs3WyKQc2d+ifKp48cAqOkRFiuK4hTyvcOq7ctXG8cblqunXZPhS8k/qzXcteg58lq4fwpXezPLQYnJvC2vDfCwzKXNBJIJ/yuoe//AFM33WhpdPQWhL+W3qJ4eHZryagIeAdnQR1W6GeYlZufPXc4RBc9w9y0HONo3K0muPyzOXTsPC7GigIGriT6rUqtJ27GYKq8CpxQp9p9VdcYE8v5CfFCPsueuhKgGhryZuYRGPtmg6TCReIlVkGqxYM4zZrN0E6ndHuS20DdGnmmlBaA6k6SZ7fumNFoGn+VYJTIL2DpNAbZTShJCaUpJJIJcDiouTwmQvQzTASDVMlMWoG2mASypwohBxkcebORvUuhZfsIc0c1o8ccW1WnYtIHroqmErNe+HGAsee349PwyTjFt9O82so4pml1H2QJI9pbsosokyAbbd1njf2idHCzzMIwEWUcDjiwljrHTup1HSlqbkUcV5ZIXIcSealUACQXxK67FCQVzuF4c5tXO4iASQFUuRlyvTr8JVIk+zloYBJ5jeFz3iziTm0sjT9+xvoNYC2KZOXynykc/wCyyeO4NtSnl5XnryT8eDnys445jg7JJJFmjKFo4cZiGjUmB6/sq+ApwAJmNe/NdF4Poh1UuI+6JFtyTdbV5/KuqpANDWgEANAvbTVDqEuMgiJ3Vp11ENFumicSE58HLqdkwpZDI316HojEJy2dUzpG6YpwQEihFNCSSSEkmKdMUEaUkoSQFwBIJApims0KUpiUOo4zAjSbpCJEBMAmBlIo0KnE8EKtMg6iXDuuQqYRzXZr8rfNd0uf8Q4bIJBhrjII2PIdFHL/AB0+Hn3ipgqRnyteTrofVXvs9TUU6lzGkIPD/EmJAginAEAxf3otPEYqpLjUdBOsQB2UOuS1WxQIcA8EE3ur2HcYQHUYBBJceZ1UmVoAWdnZ8rkQxIVGuzXsrsy4mbIGIBNhcmwQirPD2/6Q6BU8c2QRa8e5XabIGRswAJPVV8XqSf50CU2Vryn9XNPZlLjaNoWr4Uq5cRlk5XM+PJaHD/D7yHPqMGUgwHazzHILHr4apQqB4abfdI27rft5nknbuWvPKOSidCVzfCOPtktruhzjLXfQrpaVRrhLSCI16K0z4YC46D5ovxQCZgh0A2HVOyoybOHqmCpQb9/chOqu8tp1k9NkcUzfaUz6ZIAGyVAZqXa2RpLux5KImIB3t25qbsOMxcNSB2gKES8WMgaj5IHQrSR16qYTNbCeE2dh5TJJIJaJSckokptCVasczgRYDyk8/wCyskfIoNASwTv8+qnkIJPoh4ojKQTG49yjndpF9jtHNSpiZBgkGJj4p4eB/aBm+9YtEd0PiYa+hVE6Nn3p6VN3lkusSNAIE7KeLpTTe3mImLpHx6uuPw8/5Wvg3mIkRqs6lRAsdQYhXKLbLK8e3ozn0OfNfZBlQr1w0aws92Jc4w0e9HxF5bWgX7e9W6NKL2LyNf0jr1VLDMyxF3La4fQLjlbdx1KzvbTjM+hUMI5xFOmJed/m4roMH4ap0b1Dnd8JV7huDbRGt93bnsiVXF3b5q5xc3k8lvxSxAH9llY2g1wIWriGqhWpDZbyOasLE8Lpu/K2eYss/E8Ie0H2VUiRofkt8sI1US1MnM1eNV6MNqNHkba0iea2OFcVbWDQck9NZRsbhBUBDmg/Rcdi8J7J8E5SNCLKQ7rGuu1n6pvMRCNTcQ0Z9d1j8E4g2v5KhBeGxqLjmFqmh5S0mQeYvHIpbQjhnucXaRbKpGCTEyLIQpNpv8rYGQ7zcKWGqt/UJN/7KikFFPqVNIlOEJpJJJISsSkkkqWZxQnMOrTHQ6eqLKBPncSbAR0S04hUa82kNjcIzWxb4p0N9WDAg8+iKYqZQFS+hjmiE7JBVxeAp1DLmQdy0x6qsOCU7Qakcsy1GpiUYPblHK8X4G5ji+nmfT3Gpb/ZVsO4fl7LszZYvE+CZialGzvzM/V2U85rbx+XOqp4V0aa/wA0Xc8HwQoMDnAZnCSTsP3XJ+EsH7WsC+zafmeDsR+UrrnVBUcahMMBsOfuWPGbWvl59dDtl175fn+wUqx20jZM17nQTZg0AtPVDq66X5LfqOfQjB0+Kq1W8lc9kd/RRLOiJSY9egVUHJbVRvRZmLpxcBPSoRaVl8XwAqtPluLjr0WnTcUnn/KVTHAUiA+QMjmnt7l3XBsb7ZmaZIsRvI3WDx/Af/oBIOsc+az+F484d2YGx8rgeqKp2/tC4+SD/wBxNkxjRzR3gfMIVBtoa6BALbWIKI4O6H4e9G6VuE2mQ6x8u4P0RpTNapJp5FKSUJIQOlKmAoKlmVBrXOzCNSd/mr7kyiw5VbK4OtqNLqIi86l2l5HVWKhAUaTZ+9B9yKcqDKwDoPbqo0meaSXZtOwRZDSA1t5v2RZuiDSa2OaX8+KcJgqK0gl2sUlJtIu0t1QIbAvDQ4ARnMuI3WrgsKXXNmjSVHC4Wk0XzOPwV/M0wIMclGY0t6O6Tp6qIAGlzzRwA47jopDD8iOyCVi3mhupq08RqPVDLgnAz6zFn4hq164VN9KUExK7IUdN1exFBUK+sJaSrimZgRzBXHVqGV2U3DSff1Xbtb7lz3iDDAODwdRcdUw0fC2K9pSdTOtMiOcFbbDOuui4jhOMNGqH7fdd2K7gFE6TySSSSTSSSSSAsApOKkDZDJVKMk1KUxPJIwXCXXBI2/cqNQVNAdRtzVglJLDVcM0gebzP5IhqOBuABsiOdAJUGMkybjYbIArXTppzU1EBOhNRV/B0JvEKi0S4BdDhKcAWStXInTw4RPZwjtCTmJaoP2draqIJ9Eak5ArNgz6qdPB2VZ1ulVw7TcIR26qww2T0sY2OBzBnv9yJUpBGcwufUcb5W5VFjbCUSkzMfT0jksmtT9VvY1suPosvEU4KoqzmWssrjWGzNMXIWsTM90KoilHEHQ7H6rteC4wVaTTMuAgjtuuT4jSyvPW4VzwvXyVi02D2ke/ZBV2EpiotKZP6hKEkydGUhi8nZNnKdRcUWtMRznlsUDhmPbXaXBpblcWmeiN/dZXhP7lX/ed81Om20yX8+aYq9BOapBRhOCilp06aUxKQGwQl56Lo6IssPhQmT7vfzW4x1lLSfFgJEwQk0pzeUqcKo2DKZ4BCTLiDshl0Iw1eg6CQVepiyoVTDw7bQq+NEiqthG+apO5Ci0S4cgZ9EqJlzu+qbGGGuI3sPqUDFJ3mk7kn5qhi22ceQWk2mAIVTENmzRqfgmVjFZTt8UB+sK7iSG2Cr1G5WydVSXO+JKGZuYatMeq5xtZzZfBBaZHuXZYunmaR0PquVI1HLVBV2vD8SajGu2LAZ0urcrE8KV5puYYOQzOgynqtRuMpEwKjCd7pcUVYSQ/aN6eoST1PrVf29aDL222DBfsqGA4xVfiRRc2G+zLpc3K6R/lFxOJrCB7FvPykz8VnnGObi2V6zHMpii5hdrDiRr6KuVnr004znvcdOeix/Ch8tf8A3SrvDeIUq/4bw7S24nSypeEXiMTqSKxBAY50ctFnp3pulMUxqDk//jf+yXt2/wDf/wAb/wBlpmp1IpKIrtvBM9WPH0VRtYexhzn+2k/6gBDIn9EbCAkckq8llVSnXcBGcOP9JHv0VXGcbZTnzteeTdUKnF0+BEQOkrUbosLhtbNfmAe07LbJgBTsVIt0gVIFQoXEqVRHQ3siYM+qBirdtUYOtCFibtIOoFkKlV2uzNHMGPktFx8qzcNpHUFW8VUkho1KkYiwRYC5uSg4k535fysiepRM4mBeNeqHB0b946p34A338rddzyVSs4aM97voFYqH8g03PM8kKowAQnoZD2wSZVPFS7tsrtZsmFXxAgIRWZU5LnsXTh7gGgnUkmy6IDzLD4w4Bwm06FH5Th8DRdkeA5rQ4QYbcrK4k72LmAMBbuQIPqtbh7jDpty6qnxzCF4zCSWiIRNExR/6kP1H/wAkyzvYu/T8EkeladPRcTVqGHBsgC56bQotxbawNIsItedI5ozqwZRJPJZeDaaZzOuXgO7NWMuOyzWJiMNUwdcPZMTII/8AUrR8H8bNOpiAahp+2eKgvaYutLjMOaLaLKqYJuUHLPPRaTlHPz8Xbpz4iMR9qF98wQz4nYIBxU9iCuY/6ezdo9Ejw5o2HwV+/wCkTwugqeL6YH47ndgq9TxbVP4bXHq4/RZNPBAaNVllDlCXsqeI+J4hi6tn1S1vJtvig0cEBrfvqrbKSlkWd5WtZxkjd8OOOTsYXVOdDQFy3AHBogD8xJK6SkS5wtZPjNjHl1WthxAjonqhSptgKNY20VyMwAb6KOIO/LXskSgYir5TG2o6JmHQfGY7A/RPQJeZcdbW2Co4DK5hc98DNYRqFqMxDYhrXeiVXCrVCBlpx/Ueag1lrG1pcdfdySD3aANCF7En7ziemyYTLho0e/6qvXVomLKpXQm1RqQ2/PQdVTq0zF1eLdzr/IVesZQli4o5QsDj7DkDuS3ccJcFn42jnp1I0DSfRIVl8GxM5mu5SFqup2C5/hDv9S+7V0WCEuDTMa9UJVfs4/SE62vsTebvUJkewC4x/wDXd2VbE/cp/wC0Eklh+Ho/k+M/DUG/hfzokknx+FzV36oY39ySS14og7EdqZJFCbdUnpJLO/kRucA0PvXU4XUJklfH4w5/WyzRCr6JJKoifVOsqb/z/wBP7pJJnFfg/wCC3ufmr7tAkkkqBs+qcapJJmhVVSpqkkhnQHKrXTJJFGRiPvKk38Kt/Q5JJOiua4b+KP6V0fD/AMRvYpJKalrJJJJB/9k=",
        scores: [4, 5, 1, 2, 5, 4, 1, 4, 3, 3]
    },
];

module.exports = friendsData;
