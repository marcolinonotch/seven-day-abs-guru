
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Play, Pause, RotateCcw, CheckCircle, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Exercise {
  name: string;
  duration: string;
  description: string;
  videoUrl: string;
}

interface WorkoutDay {
  day: number;
  title: string;
  duration: string;
  exercises: Exercise[];
}

const Workout = () => {
  const { day } = useParams();
  const navigate = useNavigate();
  
  const [currentExercise, setCurrentExercise] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [restTime, setRestTime] = useState(30);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  // Dados do treino (mesmo array do Index.tsx)
  const workoutPlan: WorkoutDay[] = [
    {
      day: 1,
      title: "Aquecimento e Base",
      duration: "15-20 min",
      exercises: [
        {
          name: "Prancha",
          duration: "30s x 3 séries",
          description: "Mantenha o corpo reto, ombros alinhados",
          videoUrl: "https://www.youtube.com/embed/pSHjTRCQxIw"
        },
        {
          name: "Abdominais Tradicionais",
          duration: "15 rep x 3 séries",
          description: "Movimento controlado, mãos atrás da cabeça",
          videoUrl: "https://www.youtube.com/embed/1fbU_MkV7NE"
        },
        {
          name: "Bicicleta no Ar",
          duration: "20 rep x 3 séries",
          description: "Alterne os joelhos em direção aos cotovelos",
          videoUrl: "https://www.youtube.com/embed/9FGilxCbdz8"
        },
        {
          name: "Mountain Climbers",
          duration: "30s x 2 séries",
          description: "Movimento rápido, mantendo a prancha",
          videoUrl: "https://www.youtube.com/embed/nmwgirgXLYM"
        }
      ]
    },
    {
      day: 2,
      title: "Intensidade Moderada",
      duration: "20-25 min",
      exercises: [
        {
          name: "Prancha Lateral",
          duration: "20s cada lado x 3",
          description: "Apoie-se no antebraço, corpo alinhado",
          videoUrl: "https://www.youtube.com/embed/K2VljzCC16g"
        },
        {
          name: "Scissor Kicks",
          duration: "20 rep x 3 séries",
          description: "Pernas alternadas, parte baixa das costas no chão",
          videoUrl: "https://www.youtube.com/embed/JB2oyawG9KI"
        },
        {
          name: "Russian Twists",
          duration: "25 rep x 3 séries",
          description: "Gire o tronco, pés elevados",
          videoUrl: "https://www.youtube.com/embed/wkD8rjkodUI"
        },
        {
          name: "Dead Bug",
          duration: "10 rep cada lado x 2",
          description: "Movimento controlado, core ativado",
          videoUrl: "https://www.youtube.com/embed/g_BYB0R-4Ws"
        }
      ]
    },
    {
      day: 3,
      title: "Descanso Ativo",
      duration: "10-15 min",
      exercises: [
        {
          name: "Caminhada",
          duration: "15 minutos",
          description: "Ritmo moderado, respiração profunda",
          videoUrl: "https://www.youtube.com/embed/kLh4nOzjaqQ"
        },
        {
          name: "Alongamento de Quadril",
          duration: "30s cada posição",
          description: "Relaxe a região lombar",
          videoUrl: "https://www.youtube.com/embed/FSSDLDhbacc"
        },
        {
          name: "Respiração Profunda",
          duration: "5 minutos",
          description: "Inspire 4s, segure 4s, expire 4s",
          videoUrl: "https://www.youtube.com/embed/YRPh_GaiL8s"
        },
        {
          name: "Prancha Suave",
          duration: "20s x 2 séries",
          description: "Mantenha a posição com respiração calma",
          videoUrl: "https://www.youtube.com/embed/pSHjTRCQxIw"
        }
      ]
    },
    {
      day: 4,
      title: "Foco no Core",
      duration: "25-30 min",
      exercises: [
        {
          name: "Hollow Body Hold",
          duration: "20s x 3 séries",
          description: "Lombar colada no chão, pernas e ombros elevados",
          videoUrl: "https://www.youtube.com/embed/LlDNef_Ew9E"
        },
        {
          name: "V-Ups",
          duration: "12 rep x 3 séries",
          description: "Suba pernas e tronco simultaneamente",
          videoUrl: "https://www.youtube.com/embed/7UVgs18Y1P4"
        },
        {
          name: "Prancha com Elevação de Perna",
          duration: "10 rep cada perna x 2",
          description: "Eleve uma perna por vez na prancha",
          videoUrl: "https://www.youtube.com/embed/SwBXwOIgNOY"
        },
        {
          name: "Burpees Modificados",
          duration: "8 rep x 3 séries",
          description: "Sem o salto, foque no movimento do core",
          videoUrl: "https://www.youtube.com/embed/qLBImHhCXSw"
        }
      ]
    },
    {
      day: 5,
      title: "Alta Intensidade",
      duration: "25-30 min",
      exercises: [
        {
          name: "Tabata Prancha",
          duration: "20s on, 10s off x 4",
          description: "Máxima intensidade por 20 segundos",
          videoUrl: "https://www.youtube.com/embed/pSHjTRCQxIw"
        },
        {
          name: "High Knees",
          duration: "30s x 3 séries",
          description: "Joelhos no peito, movimento rápido",
          videoUrl: "https://www.youtube.com/embed/8opcQdC-V-U"
        },
        {
          name: "Jumping Jacks",
          duration: "45s x 3 séries",
          description: "Movimento explosivo, braços e pernas",
          videoUrl: "https://www.youtube.com/embed/iSSAk4XCsRA"
        },
        {
          name: "Abdominais Reverse",
          duration: "15 rep x 3 séries",
          description: "Eleve o quadril em direção ao peito",
          videoUrl: "https://www.youtube.com/embed/JB2oyawG9KI"
        }
      ]
    },
    {
      day: 6,
      title: "Resistência",
      duration: "30-35 min",
      exercises: [
        {
          name: "Prancha Longa",
          duration: "45s x 3 séries",
          description: "Mantenha por mais tempo com respiração controlada",
          videoUrl: "https://www.youtube.com/embed/pSHjTRCQxIw"
        },
        {
          name: "Bear Crawl",
          duration: "30s x 3 séries",
          description: "Movimente-se em posição de urso",
          videoUrl: "https://www.youtube.com/embed/Azrm7DxuJpI"
        },
        {
          name: "Leg Raises",
          duration: "15 rep x 3 séries",
          description: "Pernas retas, movimento controlado",
          videoUrl: "https://www.youtube.com/embed/JB2oyawG9KI"
        },
        {
          name: "Flutter Kicks",
          duration: "45s x 3 séries",
          description: "Movimento rápido e constante das pernas",
          videoUrl: "https://www.youtube.com/embed/ANVa9JcW01s"
        }
      ]
    },
    {
      day: 7,
      title: "Finalização",
      duration: "20-25 min",
      exercises: [
        {
          name: "Circuito Completo",
          duration: "3 rounds",
          description: "Combine todos os exercícios favoritos",
          videoUrl: "https://www.youtube.com/embed/pSHjTRCQxIw"
        },
        {
          name: "Prancha Challenge",
          duration: "Máximo tempo",
          description: "Teste sua evolução desde o dia 1",
          videoUrl: "https://www.youtube.com/embed/pSHjTRCQxIw"
        },
        {
          name: "Celebração Ativa",
          duration: "10 minutos",
          description: "Movimento livre, dance, comemore!",
          videoUrl: "https://www.youtube.com/embed/kLh4nOzjaqQ"
        },
        {
          name: "Alongamento Final",
          duration: "10 minutos",
          description: "Relaxe todo o corpo, respiração profunda",
          videoUrl: "https://www.youtube.com/embed/FSSDLDhbacc"
        }
      ]
    }
  ];

  const currentWorkout = workoutPlan.find(w => w.day === Number(day));

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive) {
      interval = setInterval(() => {
        if (isResting) {
          setRestTime(time => {
            if (time <= 1) {
              setIsResting(false);
              setIsActive(false);
              toast({
                title: "Descanso finalizado!",
                description: "Pronto para o próximo exercício!"
              });
              return 30;
            }
            return time - 1;
          });
        } else {
          setTime(time => time + 1);
        }
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isActive, isResting]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(0);
    setIsResting(false);
    setRestTime(30);
  };

  const completeExercise = () => {
    if (!completedExercises.includes(currentExercise)) {
      setCompletedExercises([...completedExercises, currentExercise]);
      toast({
        title: "Exercício concluído! 🎉",
        description: `${currentWorkout?.exercises[currentExercise].name} finalizado!`
      });
    }
    
    setIsActive(false);
    setTime(0);
    
    if (currentExercise < (currentWorkout?.exercises.length || 0) - 1) {
      setIsResting(true);
      setIsActive(true);
      setRestTime(30);
    }
  };

  const nextExercise = () => {
    if (currentWorkout && currentExercise < currentWorkout.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      resetTimer();
    }
  };

  const previousExercise = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
      resetTimer();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentWorkout) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Treino não encontrado</h2>
          <Button onClick={() => navigate('/')}>Voltar ao Início</Button>
        </Card>
      </div>
    );
  }

  const exercise = currentWorkout.exercises[currentExercise];
  const progress = ((currentExercise + 1) / currentWorkout.exercises.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white p-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Dia {currentWorkout.day} - {currentWorkout.title}</h1>
            <p className="text-orange-100">Exercício {currentExercise + 1} de {currentWorkout.exercises.length}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* Progress */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Progresso do Treino</span>
              <span className="text-sm">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Video Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                {exercise.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src={exercise.videoUrl}
                  title={exercise.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-orange-600">{exercise.duration}</p>
                <p className="text-gray-600">{exercise.description}</p>
              </div>
            </CardContent>
          </Card>

          {/* Timer Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {isResting ? "Tempo de Descanso" : "Cronômetro"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Timer Display */}
              <div className="text-center">
                <div className={`text-6xl font-bold ${isResting ? 'text-blue-600' : 'text-orange-600'}`}>
                  {isResting ? formatTime(restTime) : formatTime(time)}
                </div>
                <p className="text-gray-600 mt-2">
                  {isResting ? "Descanse e prepare-se para o próximo" : "Tempo de exercício"}
                </p>
              </div>

              {/* Timer Controls */}
              <div className="flex justify-center gap-4">
                {!isResting && (
                  <>
                    <Button
                      onClick={isActive ? pauseTimer : startTimer}
                      className="bg-gradient-to-r from-orange-500 to-purple-600"
                    >
                      {isActive ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                      {isActive ? "Pausar" : "Iniciar"}
                    </Button>
                    <Button variant="outline" onClick={resetTimer}>
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset
                    </Button>
                  </>
                )}
              </div>

              {/* Exercise Controls */}
              <div className="space-y-4">
                {!isResting && (
                  <Button
                    onClick={completeExercise}
                    disabled={completedExercises.includes(currentExercise)}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    {completedExercises.includes(currentExercise) ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Exercício Concluído
                      </>
                    ) : (
                      "Marcar como Concluído"
                    )}
                  </Button>
                )}

                <div className="flex gap-2">
                  <Button
                    onClick={previousExercise}
                    disabled={currentExercise === 0}
                    variant="outline"
                    className="flex-1"
                  >
                    Anterior
                  </Button>
                  <Button
                    onClick={nextExercise}
                    disabled={currentExercise === currentWorkout.exercises.length - 1}
                    variant="outline"
                    className="flex-1"
                  >
                    Próximo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Exercise List */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Lista de Exercícios</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {currentWorkout.exercises.map((ex, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    index === currentExercise
                      ? 'bg-orange-100 border-orange-300'
                      : completedExercises.includes(index)
                      ? 'bg-green-50 border-green-200'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    setCurrentExercise(index);
                    resetTimer();
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{ex.name}</h4>
                      <p className="text-sm text-gray-600">{ex.duration}</p>
                    </div>
                    {completedExercises.includes(index) && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Workout;
