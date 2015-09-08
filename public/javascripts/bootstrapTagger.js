/* bootstrapTagger
 *
 * License: MIT <http://opensource.org/licenses/mit-license.php> - see LICENSE file
 *
 * github.com/mrvautin/bootstrapTagger
 */
!function(a){a.fn.bootstrapTagger=function(r){function o(r){a(s).before("<span class='bootstraptagger_word label label-"+n()+"'>"+r+"<span class='bootstraptagger_remove'><a href='#'><i class='fa fa-times'></i></a></span></span>"),l.push(r),t(c,l)}function t(r){a(r).val(l.join())}function n(){return"random"==i.backgroundColor?e[Math.floor(Math.random()*e.length)]:i.backgroundColor}var e=["default","primary","success","info","warning","danger"],i=a.extend({backgroundColor:"primary"},r);"random"!=i.backgroundColor&&-1==e.indexOf(i.backgroundColor)&&(i.backgroundColor="primary");var s=this,l=[],p=a(s).attr("id"),d=a(s).attr("name");a(s).wrap("<div class='bootstraptagger_wrapper'></div>"),a(s).attr("id","bootstraptagger_input_field"),a(s).parent().append("<input type='hidden' name='"+d+"' id='"+p+"'>");var c=a("#"+p);if(a(s).addClass("bootstraptagger_input_box"),a(s).removeClass("form-control"),a(s).val()){var u=a(s).val().split(",");a.each(u,function(a,r){o(r)}),t(c,l),a(s).val("")}a(s).keyup(function(r){if(188==r.which){var t=a(s).val().split(",");""!=t[0]&&-1==l.indexOf(t[0])&&o(t[0]),a(s).val("")}}),a(document).on("click",".bootstraptagger_remove",function(){var r=a(this).parent().text().trim();l.splice(l.indexOf(r),1),a(this).parent().remove(),t(c,l)})}}(jQuery);