module.exports = (app, __dirname) => {

	app.use('/api', require('./routes/api'));
	app.use('/', require('./routes/index'));
	app.use('/', require('./routes/app'));

	app.get('/bots', (req, res) => {
	  res.render('bots');
	});

	app.get('/bot/:id', (req, res) => {
	  var bot = bots.filter(bot => bot.id === req.params.id).pop();
	  if(typeof bot === "object"){
		  fs.readFile('./public/' + bot.code, function read(err, data) {
		      if (err) res.redirect('../bots');
		      if(data === "undefined") res.redirect('../bots');
		      res.render('includes/viewbot', {
		        'id': bot.id,
		        'code': data
		      });
		  });
		}else{
			res.send('Não existe!!');
		}
	});

	app.get('/code/:file', (req, res) => {
		var pat = "./public/src/uploads/arquivo/" + req.params.file;
		fs.readFile(pat, function read(err, data) {
	      if (err) throw err;
	      	res.render('code', {
				code: data
			});
	  	});
	});

	app.get('/logout', (req, res) => {
	 	req.session.destroy(function(err) {
	 		if(err) throw err;
	 		res.redirect('/');
		});
	});

	// Rotas POST
	/*app.post('/login', (req, res) => {
		let $post = req.body;
		let session = req.session;
		let data = {'msg': ''};
		if($post.nome && $post.icon && $post.id){
			session.cookie.maxAge = 604800000;
			const login_data = {
				'nome': $post.nome,
				'user_id': $post.id,
				'icon': $post.icon
			};
			Object.keys(login_data).map((key) => session[key] = login_data[key]);
			data.msg = "success";
		}else{
			data.msg = "error";
		}
		res.send(data);
	});*/

	app.post('/upload/:type', (req, res) => {
		var data = {"msg": ''};
	    if (!req.files) data.msg = 'No files were uploaded.';
	    const tipo = req.params.type;
	    let folder = '';
	    if(tipo === "video"){ folder = 'src/uploads/video/'; }
	    if(tipo === "imagem"){ folder = 'src/uploads/imagem/'; }
	    if(tipo === "audio"){ folder = 'src/uploads/audio/'; }
	    if(tipo === "arquivo"){ folder = 'src/uploads/arquivo/'; }
	    let sampleFile = req.files.fileUpload;
	    let new_name = Math.floor(Math.random() * 100000) + '-' + sampleFile.name;
	    new_name = new_name.replace(/\s/g, '');
	    sampleFile.mv("public/" + folder + new_name, function(err) {
	      if (err){
	        data.msg = err;
	      }else{
	        data.msg = 'success';
	        data.path = folder + new_name;
	      }
	      res.send(data);
	    });
	});

};
