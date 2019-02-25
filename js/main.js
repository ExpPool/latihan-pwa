$(document).ready(function () {
    //API
    var _url='http://my-json-server.typicode.com/exppool/latihan_pwa_api/mahasiswa';

    // menampung data yang didapat dari API
    var result =' ';

    // menampung gender sebagai option
    var gender_opt =' ';

    // menampung semua gender dari API
    var gender = [];

    $.get(_url,function (data) {
        $.each(data, function (key, items) { 
            //untuk menampung gender semendara pd loop
            _gend = items.gender;

            //untuk memasukkan data ke result dari API
            result += '<div>'+'<p><b>'+ items.name +'</b></p>'+
                '<p>'+ _gend+'</p>'+'</div>';

            //jika gender tidak ada didalam array gender,\
            //maka masukkan gender opt

            if($.inArray(_gend, gender)=== -1){
                //data gender di push untuk pengecekan itrasi berikutnya
                gender.push(_gend);
                //set gender_opt denan <option>
                gender_opt += '<option value="'+_gend+'">'+_gend+'</option>'
            }
        });

        //mengggunakan selector ID mhs-list,
        //kemudian replace html di dalam komponen yang
        //ada di id mhs-list menjadi result
        $('#mhs-list').html(result);

        //menggunakan selector ID gender-select
        //kemudian replace tml di dalam komponen yang
        //ada di id gender-select menjadi gender-opt
        $('#gender-select').html(gender_opt);

    })
});