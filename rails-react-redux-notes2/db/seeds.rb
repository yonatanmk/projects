# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sports = Folder.create(name: "Weird sports")
turtles = Folder.create(name: "Turtles")
Folder.create(name: "Empty")
latin = Folder.create(name: "Latin Stuff")

Note.create(folder: sports, body: "Bo Taoshi")
Note.create(folder: sports, body: "Hurling")
Note.create(folder: sports, body: "Wife Carrying")

Note.create(folder: turtles, body: "Box turtles")
Note.create(folder: turtles, body: "Soft-shell turtles")
Note.create(folder: turtles, body: "Sea turtles")

Note.create(folder: latin, body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
Note.create(folder: latin, body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.")
Note.create(folder: latin, body: "Ex efficiantur philosophia intellegebat sea, eu ius dictas sanctus facilisi. Mei in modus liber, ad quod integre dissentias mea. His sale nostrum apeirian cu, unum sonet intellegebat per cu, dico appareat at sit. Ne est diam bonorum. Justo mundi graece ad mel, cu purto persequeris est, no est ridens possim forensibus.")
Note.create(folder: latin, body: "Vis platonem consequuntur te, nam te eripuit mentitum vivendum, mei ad enim legere persequeris. Antiopam quaerendum pri ut, eam eu reformidans dissentiunt, nam at facer tacimates scribentur. Ad vis latine patrioque tincidunt, electram ocurreret dignissim te mel. Eam dictas insolens te, an his debet evertitur. Veri etiam noster ne pri.")
Note.create(folder: latin, body: "No qui eruditi convenire, at duo tale diam antiopam, an scaevola voluptatum per. Graeci meliore facilisis et duo, per ne labitur blandit. Mei ut petentium theophrastus, aeterno prodesset cu mel. Ei qui dicunt epicurei.")
Note.create(folder: latin, body: "Ad mei zril nostro quodsi. Duo eu essent dolorem, ullum voluptatum cu sed. Id mel error philosophia, nam ei harum vivendo pericula. Aperiri consectetuer ex ius, liber tation feugiat vix ad. Liber nobis tractatos ea duo.")
