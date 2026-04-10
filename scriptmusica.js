

    (function() {
        const audio = document.getElementById('bgMusic');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const muteBtn = document.getElementById('muteBtn');
        const volumeSlider = document.getElementById('volumeSlider');
        const playIcon = playPauseBtn.querySelector('i');
        const muteIcon = muteBtn.querySelector('i');
        
        let isPlaying = false;
        let autoPlayAttempted = false;
        
        // Configurar volumen al 20% (0.2)
        audio.volume = 0.2;
        volumeSlider.value = 0.2;
        
        // Función para mostrar notificación
        function showNotification(message) {
            // Eliminar notificación existente si la hay
            const oldNotif = document.querySelector('.music-notification');
            if (oldNotif) oldNotif.remove();
            
            const notif = document.createElement('div');
            notif.className = 'music-notification';
            notif.innerHTML = `<i class="fas fa-music" style="margin-right: 8px;"></i>${message}`;
            document.body.appendChild(notif);
            
            // Auto-eliminar después de la animación
            setTimeout(() => {
                if (notif) notif.remove();
            }, 3000);
        }
        
        // Función para actualizar el ícono del botón play/pause
        function updatePlayIcon() {
            if (!audio.paused) {
                playIcon.className = 'fas fa-pause';
                isPlaying = true;
            } else {
                playIcon.className = 'fas fa-play';
                isPlaying = false;
            }
        }
        
        // Función para actualizar el ícono de mute
        function updateMuteIcon() {
            if (audio.muted) {
                muteIcon.className = 'fas fa-volume-mute';
            } else {
                muteIcon.className = 'fas fa-volume-up';
            }
        }
        
        // Función para iniciar la reproducción con sonido
        function startMusic() {
            if (audio.paused || audio.muted) {
                audio.muted = false;
                audio.play().then(() => {
                    updatePlayIcon();
                    updateMuteIcon();
                    showNotification('🎵 Música de fondo activada ♪');
                    console.log('Música iniciada al 20% de volumen');
                }).catch(err => {
                    console.log('Error al iniciar música:', err);
                });
            }
        }
        
        // Intentar reproducción automática al cargar (silenciada primero)
        audio.muted = true;
        audio.play().then(() => {
            console.log('Audio precargado silenciado');
            updatePlayIcon();
            autoPlayAttempted = true;
            // Mostrar mensaje de que la música está lista
            setTimeout(() => {
                showNotification('🎵 Haz clic en cualquier lugar para activar la música');
            }, 500);
        }).catch(e => {
            console.log('Autoplay bloqueado inicialmente');
            autoPlayAttempted = true;
            showNotification('🎵 Haz clic en cualquier lugar para activar la música');
        });
        
        // Detectar el primer clic del usuario en cualquier parte de la página
        const startMusicOnInteraction = function(e) {
            // Evitar que se active con clics en el reproductor (para no duplicar)
            if (e.target.closest('.music-player')) {
                return;
            }
            startMusic();
            // Remover el listener después del primer clic
            document.removeEventListener('click', startMusicOnInteraction);
            document.removeEventListener('touchstart', startMusicOnInteraction);
            console.log('Música activada por interacción del usuario');
        };
        
        // Agregar listeners para el primer clic/toque
        document.addEventListener('click', startMusicOnInteraction);
        document.addEventListener('touchstart', startMusicOnInteraction);
        
        // Botón Play/Pause (manual)
        playPauseBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (audio.paused) {
                // Si está silenciado o pausado, iniciar
                if (audio.muted) {
                    audio.muted = false;
                    updateMuteIcon();
                }
                audio.play().then(() => {
                    updatePlayIcon();
                    showNotification('🎵 Reproduciendo');
                }).catch(err => {
                    console.log('Error al reproducir:', err);
                });
            } else {
                audio.pause();
                updatePlayIcon();
                showNotification('⏸ Música pausada');
            }
        });
        
        // Botón Mute
        muteBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            audio.muted = !audio.muted;
            updateMuteIcon();
            if (!audio.muted && audio.paused) {
                // Si se desmutea pero está pausado, iniciar reproducción
                audio.play().then(() => {
                    updatePlayIcon();
                }).catch(err => console.log('Error:', err));
            }
        });
        
        // Control de volumen
        volumeSlider.addEventListener('input', function(e) {
            const vol = parseFloat(e.target.value);
            audio.volume = vol;
            if (audio.muted && vol > 0) {
                audio.muted = false;
                updateMuteIcon();
            }
            // Mostrar nivel de volumen
            const volPercent = Math.round(vol * 100);
            // Opcional: mostrar tooltip o notificación sutil
        });
        
        // Actualizar slider si el volumen cambia por otro medio
        audio.addEventListener('volumechange', function() {
            volumeSlider.value = audio.volume;
            updateMuteIcon();
        });
        
        // Actualizar ícono cuando la reproducción termine o se pause
        audio.addEventListener('play', updatePlayIcon);
        audio.addEventListener('pause', updatePlayIcon);
        
        console.log('🎵 Reproductor de música listo - Se activará automáticamente al primer clic del usuario');
    })();
