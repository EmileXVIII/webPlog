var lastValueSim= 't3st3&!'; 
var checkVirginSim=0;
$j("#emailSim").on("change keyup paste click", function() {

    if (document.getElementById("emailSim").value != lastValueSim && document.getElementById("emailSim").value != "") {
        checkVirginSim=0;
        lastValueSim = document.getElementById("emailSim").value;
        console.log('emailSim input value update : ' + lastValueSim);

        if (validateEmail(lastValueSim)) {
            console.log("SIM VALID ADDRESS MAIL");
            $j('#formNewsLetterSim').removeClass().addClass('news-success');
            document.getElementById("news-info-sim").innerHTML = "";
        } else {

            $j('#formNewsLetterSim').removeClass().addClass('news-error');
            console.log("SIM NOT VALID ADDRESS MAIL");
            document.getElementById("news-info-sim").innerHTML = "Veuillez entrer un email valide.";
        }
        checkVirginSim = checkVirginSim+1;
        console.log(checkVirginSim);

    } else if (document.getElementById("emailSim").value == "" && checkVirginSim != 0) {
        console.log("SIM EMPTY ADDRESS MAIL");
        $j('#formNewsLetterSim').removeClass().addClass('news-success');
        document.getElementById("news-info-sim").innerHTML = "Le champ email ne peut pas être vide.";
    }
});
var lastValueEms = 't3st3&!';
var checkVirginEms=0;
$j("#emailEms").on("change keyup paste click", function() {

    if (document.getElementById("emailEms").value != lastValueEms && document.getElementById("emailEms").value != "") {
        checkVirginEms=0;
        lastValueEms = document.getElementById("emailEms").value;
        console.log('emailEms input value update : ' + lastValueEms);

        if (validateEmail(lastValueEms)) {
            console.log("EMS VALID ADDRESS MAIL");
            $j('#formNewsLetterEms').removeClass().addClass('news-success');
            document.getElementById("news-info-ems").innerHTML = "";
        } else {

            $j('#formNewsLetterEms').removeClass().addClass('news-error');
            console.log("EMS NOT VALID ADDRESS MAIL");
            document.getElementById("news-info-ems").innerHTML = "Veuillez entrer un email valide.";
        }
        checkVirginEms = checkVirginEms+1;
        console.log(checkVirginEms);

    } else if (document.getElementById("emailEms").value == "" && checkVirginEms != 0) {
        console.log("EMS EMPTY ADDRESS MAIL");
        $j('#formNewsLetterEms').removeClass().addClass('news-success');
        document.getElementById("news-info-ems").innerHTML = "Le champ email ne peut pas être vide.";
    }
});
var lastValueFooter = 't3st3&!';
var checkVirginFooter=0;
$j("#emailFooter").on("change keyup paste click", function() {

    if (document.getElementById("emailFooter").value != lastValueFooter && document.getElementById("emailFooter").value != "") {
        checkVirginFooter=0;
        lastValueFooter = document.getElementById("emailFooter").value;
        console.log('emailFooter input value update : ' + lastValueFooter);
        if (validateEmail(lastValueFooter)) {
            console.log("FOOTER VALID ADDRES MAIL");
            $j('#formNewsLetterFooter').removeClass().addClass('news-success');
            document.getElementById("news-info-footer").innerHTML = "";
        } else {
            $j('#formNewsLetterFooter').removeClass().addClass('news-error');
            console.log("FOOTER NOT VALID ADDRES MAIL");
            document.getElementById("news-info-footer").innerHTML = "Veuillez entrer un email valide.";
        }
        checkVirginFooter = checkVirginFooter+1;
        console.log(checkVirginFooter);

    } else if (document.getElementById("emailFooter").value == "" && checkVirginFooter != 0) {
        console.log("FOOTER EMPTY ADDRESS MAIL");
        $j('#formNewsLetterFooter').removeClass().addClass('news-success');
        document.getElementById("news-info-footer").innerHTML = "Le champ email ne peut pas être vide.";
    }
});



function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function newsLetterRegistion(formSelect) {
    //fonction PFS
    /*-------EMS-------*/

    if (formSelect == 1) {

        var cat = $j('#newsletterEms').attr('class');

        console.log("Ems cat : " + cat);

        var emailEms = document.getElementById("emailEms").value;

        var originLabelEms = document.getElementById("originLabelEms").value;

        console.log(validateEmail(emailEms));

        if(validateEmail(emailEms)){

        //calling the controller/servlet "subscriptionNewsletterNew"

        $j.ajax({

            type: 'POST',

            url: '/webapp/wcs/stores/servlet/subscriptionNewsletterNew',

            dataType: "json",

            data: {

                email: emailEms,

                originLabel: originLabelEms

            },

            beforeSend: function() {},

            success: function(recievedData) {

                callback(recievedData);

            },

            error: function(e) {

                $j('#formNewsLetterEms').removeClass().addClass('news-error');
                document.getElementById("news-info-ems").innerHTML = "Le service est momentanÃ©ment indisponible. Veuillez rÃ©essayer ultÃ¨rieurement.";

                console.log("Ems errorReponseEms: " + "Le service est momentanÃ©ment indisponible. Veuillez rÃ©essayer ultÃ¨rieurement.");

            }

        });

        //processing response to user

        var newsLetterResponseEms;

        var isSuccessResponseEms;

        var emailResponseEms;

        var isMobileReponseEms;

        var errorReponseEms;

        //Modify form class to show .news-error or .news-success

        function callback(response) {

            newsLetterResponseEms = response;

            isSuccessResponseEms = response.isSuccess;

            errorReponseEms = response.error;

            console.log("isSuccessResponseEms : " + isSuccessResponseEms);

            if (isSuccessResponseEms) {

                $j('#formNewsLetterEms').removeClass().addClass('news-success');

                var emailInput = document.getElementById("emailEms");

                emailInput.value = "";
                document.getElementById("news-info-ems").innerHTML = errorReponseEms;
                console.log("Ems errorReponseEms : " + errorReponseEms);

            } else {

                $j('#formNewsLetterEms').removeClass().addClass('news-error');

                document.getElementById("news-info-ems").innerHTML = "";
                document.getElementById("news-info-ems").innerHTML = errorReponseEms;

                console.log("Ems errorReponseEms : " + errorReponseEms);

            }

        }

    }else{
        if(emailEms == ""){
            $j('#formNewsLetterEms').removeClass().addClass('news-error');
            console.log("EMS NOT VALID ADDRES MAIL");
            document.getElementById("news-info-ems").innerHTML = "Le champ email ne peut pas être vide.";
        }else{
            $j('#formNewsLetterEms').removeClass().addClass('news-error');
            console.log("EMS NOT VALID ADDRES MAIL");
            document.getElementById("news-info-ems").innerHTML = "Veuillez entrer un email valide.";
        }
         
    }

        /*-------FOOTER-------*/

    } else if (formSelect == 2 ) {

        var cat = $j('#newsletterFooter').attr('class');

        console.log("Footer cat : " + cat);

        var emailFooter = document.getElementById("emailFooter").value;

        var originLabelFooter = document.getElementById("originLabelFooter").value;

        var newsInfoFooter = document.getElementById("news-info-footer");

        newsInfoFooter.value = "Footer cat : " + cat;
        console.log(validateEmail(emailFooter));

         if(validateEmail(emailFooter)){

        //calling the controller/servlet "subscriptionNewsletterNew"

        $j.ajax({

            type: 'POST',

            url: '/webapp/wcs/stores/servlet/subscriptionNewsletterNew',

            dataType: "json",

            data: {

                email: emailFooter,

                originLabel: originLabelFooter

            },

            beforeSend: function() {},

            success: function(recievedData) {

                callback(recievedData);

            },

            error: function(e) {

                $j('#formNewsLetterFooter').removeClass().addClass('news-error');
                document.getElementById("news-info-footer").innerHTML = "Le service est momentanÃ©ment indisponible. Veuillez rÃ©essayer ultÃ¨rieurement.";
                console.log("Footer errorReponseFooter: " + "Le service est momentanÃ©ment indisponible. Veuillez rÃ©essayer ultÃ¨rieurement.");

            }

        });

        //processing response to user

        var newsLetterResponseFooter;

        var isSuccessResponseFooter;

        var emailResponseFooter;

        var isMobileReponseFooter;

        var errorReponseFooter;

        //Modify form class to show .news-error or .news-success

        function callback(response) {

            newsLetterResponseFooter = response;

            isSuccessResponseFooter = response.isSuccess;

            errorReponseFooter = response.error;

            console.log("isSuccessResponseFooter : " + isSuccessResponseFooter);

            if (isSuccessResponseFooter) {

                $j('#formNewsLetterFooter').removeClass().addClass('news-success');

                var emailInput = document.getElementById("emailFooter");

                emailInput.value = "";
                document.getElementById("news-info-footer").innerHTML = errorReponseFooter;
                console.log("Footer errorReponseFooter : " + errorReponseFooter);



            } else {

                $j('#formNewsLetterFooter').removeClass().addClass('news-error');

                document.getElementById("news-info-footer").innerHTML = errorReponseFooter;
                console.log("Footer errorReponseFooter : " + errorReponseFooter);


            }

        }
    }else{

        if(emailFooter == ""){
            $j('#formNewsLetterFooter').removeClass().addClass('news-error');
            console.log("FOOTER NOT VALID ADDRES MAIL");
            document.getElementById("news-info-footer").innerHTML = "Le champ email ne peut pas être vide.";
        }else{
            $j('#formNewsLetterFooter').removeClass().addClass('news-error');
            console.log("FOOTER NOT VALID ADDRES MAIL");
            document.getElementById("news-info-footer").innerHTML = "Veuillez entrer un email valide.";
        }

         
    }

        /*-------SIM-------*/

    } else if (formSelect == 3 ) {

        var cat = $j('#newsletterSim').attr('class');

        console.log("Sim cat : " + cat);

        var emailSim = document.getElementById("emailSim").value;

        var originLabelSim = document.getElementById("originLabelSim").value;

        var newsInfoSim = document.getElementById("news-info-sim");

        newsInfoSim.value = "Sim cat : " + cat;

         if(validateEmail(emailSim)){

        //calling the controller/servlet "subscriptionNewsletterNew"

        $j.ajax({

            type: 'POST',

            url: '/webapp/wcs/stores/servlet/mSubscriptionNewsletterNew',

            dataType: "json",

            data: {

                email: emailSim,

                originLabel: originLabelSim

            },

            beforeSend: function() {},

            success: function(recievedData) {
                console.log("Request Sent");
                callback(recievedData);

            },

            error: function(e) {
                console.log("Request NOT Sent");
                $j('#formNewsLetterSim').removeClass().addClass('news-error');

                document.getElementById("news-info-sim").innerHTML = "Le service est momentanÃ©ment indisponible. Veuillez rÃ©essayer ultÃ¨rieurement.";

                console.log("Sim errorReponseSim : " + "Le service est momentanÃ©ment indisponible. Veuillez rÃ©essayer ultÃ¨rieurement.");

            }

        });

        //processing response to user

        var newsLetterResponseSim

        var isSuccessResponseSim;

        var emailResponseSim;

        var isMobileReponseSim;

        var errorReponseSim;

        //Modify form class to show .news-error or .news-success 

        function callback(response) {

            newsLetterResponseSim = response;

            isSuccessResponseSim = response.isSuccess;

            errorReponseSim = response.error;

            console.log("isSuccessResponseSim : " + isSuccessResponseSim);

            if (isSuccessResponseSim) {

                $j('#formNewsLetterSim').removeClass().addClass('news-success');

                var emailInput = document.getElementById("emailSim");

                emailInput.value = "";
                document.getElementById("news-info-sim").innerHTML = errorReponseSim;

                console.log("Sim errorReponseSim : " + errorReponseSim);
                $j('#formNewsLetterSim').removeClass().addClass('news-success');



            } else {

                $j('#formNewsLetterSim').removeClass().addClass('news-error');

                document.getElementById("news-info-sim").innerHTML = errorReponseSim;

                console.log("Sim errorReponseSim : " + errorReponseSim);

            }



            

        }
    }else{

        if(emailSim == ""){
           $j('#formNewsLetterSim').removeClass().addClass('news-error');
            console.log("SIM NOT VALID ADDRES MAIL");
            document.getElementById("news-info-sim").innerHTML = "Le champ email ne peut pas être vide.";
        }else{
             $j('#formNewsLetterSim').removeClass().addClass('news-error');
            console.log("SIM NOT VALID ADDRES MAIL");
            document.getElementById("news-info-sim").innerHTML = "Veuillez entrer un email valide.";
        }
    }

    /*-------UNKOWN-------*/

    } else {

        var cat = $j('#newsletterEms').attr('class');

        console.log("Ems cat : " + cat);

        var emailEms = document.getElementById("emailEms").value;

        var originLabelEms = document.getElementById("originLabelEms").value;

        //calling the controller/servlet "subscriptionNewsletterNew"

        $j.ajax({

            type: 'POST',

            url: '/webapp/wcs/stores/servlet/subscriptionNewsletterNew',

            dataType: "json",

            data: {

                email: emailEms,

                originLabel: originLabelEms

            },

            beforeSend: function() {},

            success: function(recievedData) {

                callback(recievedData);

            },

            error: function(e) {

                $j('#formNewsLetterEms').removeClass().addClass('news-error');
                document.getElementById("news-info-ems").innerHTML = "Le service est momentanÃ©ment indisponible. Veuillez rÃ©essayer ultÃ¨rieurement.";

                console.log("Ems errorReponseEms: " + "Le service est momentanÃ©ment indisponible. Veuillez rÃ©essayer ultÃ¨rieurement.");

            }

        });

        //processing response to user

        var newsLetterResponseEms;

        var isSuccessResponseEms;

        var emailResponseEms;

        var isMobileReponseEms;

        var errorReponseEms;

        //Modify form class to show .news-error or .news-success

        function callback(response) {

            newsLetterResponseEms = response;

            isSuccessResponseEms = response.isSuccess;

            errorReponseEms = response.error;

            console.log("isSuccessResponseEms : " + isSuccessResponseEms);

            if (isSuccessResponseEms) {

                $j('#formNewsLetterEms').removeClass().addClass('news-success');

                var emailInput = document.getElementById("emailEms");

                emailInput.value = "";
                document.getElementById("news-info-ems").innerHTML = "";
                document.getElementById("news-info-ems").innerHTML = errorReponseEms;

                console.log("Ems errorReponseEms : " + errorReponseEms);



            } else {

                $j('#formNewsLetterEms').removeClass().addClass('news-error');

                document.getElementById("news-info-ems").innerHTML = "";
                document.getElementById("news-info-ems").innerHTML = errorReponseEms;

                console.log("Ems errorReponseEms : " + errorReponseEms);

            }

        }

    }

    /*------------------------------------------------------------------*/

    // TRACKING

    //SI ON EST SUR UNE PAGE CATEGORIE
    if (($j('#newsletterEms').attr('class') != "undefined" && $j('#newsletterEms').attr('class') != "sim") || ($j('#newsletterFooter').attr('class') != "undefined" && $j('#newsletterFooter').attr('class') != "sim")) {
        // #5811 - Tag Newsletter en double
        // Initialisation des categories
        var catNewsletterEms = $j('#newsletterEms').attr('class');
        var catNewsletterFooter = $j('#newsletterEms').attr('class');

        // #5811 - Tag Newsletter en double
        if(catNewsletterEms != undefined) {
            // SI LA FONCTION PFS EST SUCCESS
            if($j('#formNewsLetterEms').hasClass('news-success')) {
                tc_events_global(this, 'standard', {
                    'event_name': '' + catNewsletterEms + '%::Inscription_OK',
                    'level2_id': tc_vars['xiti_xtn2'],
                    'event_type': 'N'
                })
            } else {
                // SI ELLE EST EN ERREUR
                tc_events_global(this, 'standard', {
                    'event_name': '' + catNewsletterEms + '%::Inscription_erreur',
                    'level2_id': tc_vars['xiti_xtn2'],
                    'event_type': 'N'

                })
            }
        } else {
            // SI LA FONCTION PFS EST SUCCESS
            if($j('#formNewsLetterFooter').hasClass('news-success')) {
                tc_events_global(this, 'standard', {
                    'event_name': '' + catNewsletterFooter + '%::Inscription_OK',
                    'level2_id': tc_vars['xiti_xtn2'],
                    'event_type': 'N'
                })
            } else {
                // SI ELLE EST EN ERREUR
                tc_events_global(this, 'standard', {
                    'event_name': '' + catNewsletterFooter + '%::Inscription_erreur',
                    'level2_id': tc_vars['xiti_xtn2'],
                    'event_type': 'N'

                })
            }
        }
    } else {
        //ON EST SUR UN PAGE HP

        // SI LA FONCTION PFS EST SUCCESS
        
        if($j('#formNewsLetterEms').hasClass('news-success') || $j('#formNewsLetterFooter').hasClass('news-success')) {
            tc_events_global(this, 'standard', {

                'event_name': 'Newsletter::%Homepage::Inscription_OK',

                'level2_id': tc_vars['xiti_xtn2'],

                'event_type': 'N'

            })
        } else {
            // SI ELLE EST EN ERREUR

            tc_events_global(this, 'standard', {

                'event_name': 'Newsletter::%Homepage::Inscription_erreur',

                'level2_id': tc_vars['xiti_xtn2'],

                'event_type': 'N'

            })
        }

    }

}