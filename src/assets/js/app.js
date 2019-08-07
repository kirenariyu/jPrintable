import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
import './lib/jquery-dataTables-min';
import './lib/jquery-validate-min';
import './lib/print-responsively';

$(document).foundation();

$(document).ready(function() {
  $('#little-menu').click(function() {
    var ico	= $(this).find('i'),
      ul	= $(this).parent().next();

    if (ico.hasClass('fi-list') && ul.hasClass('show-for-medium')) {
      ul.removeClass('show-for-medium').css('top', $('#main-nav').outerHeight() + 'px').addClass('slideDown');
      setTimeout(function() {
        ico.removeClass().addClass('fi-x');
      }, 800);
    } else if (ico.hasClass('fi-x') && ul.hasClass('slideDown')) {
      ul.addClass('slideUp').removeClass('slideDown').css('top', '');
      setTimeout(function() {
        ul.addClass('show-for-medium').removeClass('slideUp');
        ico.removeClass().addClass('fi-list');
      }, 800);
    }
  });
  
  $('.dt-responsive').DataTable({
    autoWidth: true,
    info: false,
    ordering: false,
    paging: false,
    responsive: true,
    searching: false
  });

  $('#email-form').validate({
    messages: {
      name: 'Wait a minute, who are you?',
      email: 'I love emails.',
      'body-msg': 'Uhm... We need a topic.'
    },
    submitHandler: function(form) {
      form.submit();
    }
  });

  $('#send-love').click(function() {
    if ($('#email-form').valid()) {
      $('#loading').foundation('open');
      Email.send({
        Host : 'smtp.elasticemail.com',
        Username : 'yumitakuma@outlook.com',
        Password : '833ba632-d222-4b1d-b75b-451fe271519a',
        To : 'yumitakuma@outlook.com',
        From : $('#email').val(),
        Subject : $('#subject').val() + ' | ' + $('#subject-msg').val(),
        Body : $('#body-msg').val() + ' <==> ' + $('#name').val()
      }).then(function() {
        $('#loading').foundation('close');
        $('#name, #email, #subject, #subject-msg, #body-msg').val('');
        $('#time').html(new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Manila"})).toLocaleTimeString());
        $('#love-status').foundation('open');
      });
    }
  });

  var help = $('#help'),
    orig_offset = help.offset().top + help.outerHeight();

  var right;

  $(window).bind('load resize', function() {
    right = $('#help-button').css('margin-bottom');
  });

  $(window).bind('scroll load resize', function() {
    var scroll = $(this).scrollTop() + $(this).height();

    if (scroll > orig_offset) {
      help.css({ 'position': 'relative', 'right': '0' });
      help.find('#help-button').addClass('hide');
      help.find('#help-text').removeClass('hide');
    }
    if (scroll < orig_offset) {
      help.css({ 'position': 'fixed', 'right': right });
      help.find('#help-button').removeClass('hide');
      help.find('#help-text').addClass('hide');
    }
  });

  $('.codeblock').each(function() {
    var str = $(this).html();
    str.replaceAll('{', 'x');
    $(this).html(str);
  });
});