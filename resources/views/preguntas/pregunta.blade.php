@extends('layouts.app')

@section('content')
        <div class="container-preguntas">    
            <div class="container-play">                                           
                <div class="avatar-display">
                    <h1>¡Juguemos!</h1>
                    <div class="container-message-avatar">
                    
                        <div class="dialog_Box message-avatar-correcto">
                            <span class="dialog">¡Correcto! sigue así.</span>
                        </div>
                            
                        <div class="dialog_Box message-avatar-incorrecto">
                            <span class="dialog">¡No es Correcto! intenta otra vez.</span>
                        </div>
                        
                    </div>
                    <canvas id="boy" width="300" height="500"></canvas>
                </div>
                <div class="preguntas-display">
                    <h2>{{$preguntasArray['pregunta']}}</h2>
                    <ul class="preguntas-list">
                        <li><button class="button-respuesta" data-is-correct="{{$preguntasArray['respuesta_1']['is_correct']}}">{{$preguntasArray['respuesta_1']['text']}}</button><i class=""></i></li>
                        <li><button class="button-respuesta" data-is-correct="{{$preguntasArray['respuesta_2']['is_correct']}}">{{$preguntasArray['respuesta_2']['text']}}</button><i class=""></i></li>
                        <li><button class="button-respuesta" data-is-correct="{{$preguntasArray['respuesta_3']['is_correct']}}">{{$preguntasArray['respuesta_3']['text']}}</button><i class=""></i></li>
                    </ul>
                    <div class="siguiente-pregunta">
                        @php if($contador >= 10) $contador=1; else ++$contador @endphp
                        <button id="btn-siguiente-pregunta" type="button" class="btn-siguiente-pregunta" onclick="window.location.href='{{URL::to('/preguntas/'.$contador)}}';" disabled>Siguiente</button>
                    </div>
                </div>
            </div>
        </div>
@endsection