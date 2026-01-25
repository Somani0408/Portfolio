import React from 'react';
import { FiVideo, FiClock, FiAward } from 'react-icons/fi';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const Courses = () => {
    const courses = [
        {
            title: "Advanced Penetration Testing",
            platform: "Udemy",
            duration: "24 Hours",
            level: "Advanced",
            status: "Completed",
            certificate: "#"
        },
        {
            title: "Python for Cybersecurity",
            platform: "Coursera",
            duration: "12 Hours",
            level: "Intermediate",
            status: "Completed",
            certificate: "#"
        },
        {
            title: "Web App Hacking Web 3.0",
            platform: "Custom",
            duration: "Ongoing",
            level: "Expert",
            status: "In Progress",
            certificate: null
        }
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-12 pb-20">
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold">
                    <span className="text-white">LEARNING</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500">PATH</span>
                </h1>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    Continuous learning and skill acquisition certifications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                    <Card key={index} className="space-y-4">
                        <div className="flex justify-between items-start">
                            <Badge variant="gray">{course.platform}</Badge>
                            <Badge variant={course.status === 'Completed' ? 'cyan' : 'red'}>{course.status}</Badge>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-text-secondary">
                                <span className="flex items-center gap-1"><FiClock /> {course.duration}</span>
                                <span className="flex items-center gap-1"><FiVideo /> {course.level}</span>
                            </div>
                        </div>

                        {course.certificate && (
                            <div className="pt-4">
                                <Button variant="secondary" className="w-full text-sm py-2">
                                    View Certificate
                                </Button>
                            </div>
                        )}
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Courses;
